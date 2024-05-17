import jwt from "jsonwebtoken";
import { User } from "../models/index.js";
import { env } from "../config.js";
import bcrypt from "bcrypt";

const login = async (req, res) => {
  try {
    // Recherche l'user dans la base de données par son email
    const user = await User.findOne({
      where: { email: req.body.email },
    });
    // Si l'user n'est pas trouvé , renvoie error 404
    if (!user) return res.status(404).json("User not found");

    /* Je compare le mdp de la rêquete avec celui dans la bdd*/
    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    // Si le mdp est incorrect je renvoie une error 400.
    if (!comparePassword) return res.status(400).json("Wrong Credentials !! ");

    // Crée un jeton JWT pour l'utilisateur avec son ID
    // expire aprés 24h

    const token = jwt.sign(
      // Le 1 arg = la charge utile du token.
      // Ici , nous incluons l'ID de l'utilisateur
      { id: user.id },

      // Le 2 arg = clé secrète, qui est utilisée pour signer le token.
      // On le récupére à partir des variables d'environnement

      env.token,

      // Le 3 arg = un objet qie contient les oprions du token , dans ce cas je définis la durée de 24 h du token

      { expiresIn: "24h" }
    );

    // Envoie le jeton (token) JWT sous forme de cookie HTTPOnly
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(user);
  } catch (e) {
    console.log(e);
  }
};

const register = async (req, res, next) => {
  //  Début du bloc try pour la gestion des erreurs

  try {
    //  Je crypte (haché) le mdp avec bcrypt, 10 est est le nombre de tours de salage
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Création d'un nouveau user dans la bdd , avec les info réçues et le mdp haché
    await User.create({
      ...req.body,
      password: hashedPassword,
    });

    // Envoi d'une réponse avec le status 201 (crée) et un message de confirmation
    res.status(201).json("User has been created!");
  } catch (e) {
    // Si une erreur se produit, passez-la au prochain middleware pour la gestion des erreurs
    console.log(e);
    next(error);
  }
};

const getAll = async (req, res) => {
  try {
    // recherche l'user dnas la base de données par son email
    const users = await User.findAll()
      res.status(200).json(users);

  } catch (error) {
    console.log(error);
    res.status(400).json("Not User Found .")
  }
};

const getById = async (req, res) => {
  try {
      // Récupère l'ID de l'utilisateur depuis les paramètres de la requête
      const id = req.params.id;
      // Utilise la méthode findByPk de Sequelize pour obtenir l'utilisateur avec l'ID spécifié
      const user = await User.findByPk(id);
      // Répond avec le statut 200 (OK) et l'utilisateur
      res.status(200).json(user);
  } catch (error) {
      // Log l'erreur si quelque chose se passe mal
      console.log(error);
  }
}

const updateById = async (req, res) => {
  try {
      // Je récupère l'utilisateur avec son id (findByPk)
      const user = await User.findByPk(req.params.id);

      // Puis je met à jour cet utilisateur avec update
      await user.update(
          req.body
      );
      // Si l'utilisateur n'est pas trouvé, renvoie le statut 404 (Non trouvé) et un message d'erreur
      if (!user) return res.status(404).json("User not found !");
      // Si tout se passe bien, renvoie le statut 200 (OK), un message de confirmation et l'utilisateur mis à jour
      res.status(200).json({
          message: "user updated",
          user,
      });
  } catch (error) {
      // Log l'erreur si quelque chose se passe mal
      console.log(error);
  }
}

const deleteById = async (req, res) => {
  try {
      // Utilise la méthode destroy de Serquelize pour supprimer l'utilisateur avec l'ID spécifié
      const userDeleted = await User.destroy({ where: { id: req.params.id } });
      // Si l'utilisateur n'est pas trouvé, renvoie le statut 404 (Non trouvé) et un message d'erreur
      if (!userDeleted) return res.status(404).json("User not found !");
      // Si tout se passe bien, renvoie le statut 200 (OK) et un message de confirmation
      res.status(200).json({ message: "User deleted" });
  } catch (error) {
      // Log l'erreur si quelque chose se passe mal
      console.log(error);
  }
}

export { login, register, getAll , deleteById , updateById , getById };
