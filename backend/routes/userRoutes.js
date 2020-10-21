import express from 'express'
const router = express.Router()
import {
	authUser,
	getUserProfile,
	registerUser,
	updateUserProfile,
} from '../controlers/userControler.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/login', authUser)
router.route('/').post(registerUser)
router
	.route('/profile')
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile)

export default router
