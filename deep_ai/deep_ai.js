import deepai from 'deepai';


const generate_deepai_img = async (apiKey, keywords) => {
    deepai.setApiKey(apiKey);
    const res = await deepai.callStandardApi("text2img", {
        text: keywords,
    });

    return res.output_url
}

export default generate_deepai_img