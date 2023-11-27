const socialMedias = ["instagram", "facebook", "whatsapp", "amazon", "linkedin"]

for(const n of socialMedias){
    console.log(n);
}

const symbols = {
    yt: "youtube",
    ig: "instagram",
    fb: "facebook"
};

for (const n in symbols){
    console.log(`key => ${n}: value => ${symbols[n]}`);
}