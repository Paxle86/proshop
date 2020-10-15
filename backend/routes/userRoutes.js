import express from 'express'
const router = express.Router()
import {
	authUser,
	getUserProfile,
	registerUser,
} from '../controlers/userControler.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/login', authUser)
router.route('/').post(registerUser)
router.route('/profile').get(protect, getUserProfile)

export default router
