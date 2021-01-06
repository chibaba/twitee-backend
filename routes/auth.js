const { registerUser, loginUser, checkUser } = require('../controller/user')
const Router = require('express').Router()
const authUser = require('../Authentication/Auth')

/**
 * @swagger
 * /auth/registration:
 *   post:
 *     summary: registers a new user to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: meuuweheii@gmail.com
 *               password:
 *                  type: string
 *                  description: the user's password
 *                  example: papilo123
 *     responses:
 *       201:
 *        description: Created
 *        content: application/json
 *        schema:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               description: The user ID
 *               example: 0
 *             email:
 *                type: string
 *                description: the user email
 *                example: joes@gmail.com
 *             token:
 *                 type: string
 *                 description: token generated for the user
 *                 example: jidjididijdi2383
*/

Router.post('/register', registerUser)

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: authenticates and logins in a user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: meuuweheii@gmail.com
 *               password:
 *                  type: string
 *                  description: the user's password
 *                  example: papilo123
 *     responses:
 *       200:
 *        description: OK
 *        content: application/json
 *        schema:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               description: The user ID
 *               example: 0
 *             email:
 *                type: string
 *                description: the user email
 *                example: joes@gmail.com
 *             token:
 *                 type: string
 *                 description: token generated for the user
 *                 example: jidjididijdi2383
*/
Router.post('/login', loginUser)

/**
 * @swagger
 * /auth/check:
 *   post:
 *     summary: checks logined in user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the user.
 *                 example: makinde
 *     responses:
 *       200:
 *        description: OK
 *        content: application/json
 *        schema:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               description: The user ID
 *               example: 0
 *             email:
 *                type: string
 *                description: the user email
 *                example: joes@gmail.com
 *             token:
 *                 type: string
 *                 description: token generated for the user
 *                 example: jidjididijdi2383
*/
Router.get('/check', authUser, checkUser)

module.exports = Router