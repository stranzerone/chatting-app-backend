import express from 'express'
import { getAll } from './Model.js'
const route = express.Router()



route.post('/',getAll)


export default route