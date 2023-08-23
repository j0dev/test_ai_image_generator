import dotenv from 'dotenv';
import generate_replicate_img from './replicate/replicate.js'
import generate_stable_difussion_img from './stable_difussion/stable_difussion.js'
import generate_deepai_img from './deep_ai/deep_ai.js';

// Load Env
dotenv.config({ path: '.env.local' });

const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN
const STABLE_DIFFUSION_API_KEY = process.env.STABLE_DIFFUSION_API_KEY
const DEEP_AI_API_KEY = process.env.DEEP_AI_API_KEY

const keywords = "rocket fast shopping company background"

console.log("Keywords : ", keywords)


const replicate_img_url = await generate_replicate_img(REPLICATE_API_TOKEN, keywords)
const stable_difussion_img_url = await generate_stable_difussion_img(STABLE_DIFFUSION_API_KEY, keywords)
const deepai_img_url = await generate_deepai_img(DEEP_AI_API_KEY, keywords)

console.log("[replicate_img_url] :", replicate_img_url)
console.log("[stable_difussion_img_url] :", stable_difussion_img_url)
console.log("[deepai_img_url] :", deepai_img_url)

