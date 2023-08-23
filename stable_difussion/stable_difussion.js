
const generate_stable_difussion_img = async (apiKey, keywords) => {

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "key": apiKey,
    "prompt": keywords,
    "negative_prompt": null,
    "width": "512",
    "height": "512",
    "samples": "1",
    "num_inference_steps": "20",
    "seed": null,
    "guidance_scale": 7.5,
    "safety_checker": "yes",
    "multi_lingual": "no",
    "panorama": "no",
    "self_attention": "no",
    "upscale": "no",
    "embeddings_model": null,
    "webhook": null,
    "track_id": null
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://stablediffusionapi.com/api/v3/text2img", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result.output[0])
      return result.output[0]
    })
    .catch(error => console.log('error', error));




}


export default generate_stable_difussion_img