import Replicate from "replicate";


const generate_replicate_img = async (apiKey, keywords) => {
  const replicate = new Replicate({
    auth: apiKey,
  });
  
  const model = "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf";
  const input = { prompt: keywords };
  const output = await replicate.run(model, { input });
  console.log(output[0])
  return output[0]
}


export default generate_replicate_img
