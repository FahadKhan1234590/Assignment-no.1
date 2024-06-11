//Q1

//Short Circuit
  //1
let exp = "faraz" || (true + false) + 5 && "" || "true"
         // "faraz" || 1 + 5 && "" || "true"
         // "faraz" || 6 || "true"
         // "faraz" || 6
         // "faraz"
console.log(exp)
 
  //2
let b = 3
let exp1 = (1+2) + ++b || 5 && 0
          // (3) + 4 || 0
          // 7 || 0
          // 7
console.log(exp1)

  //3
let a = 5
let exp2 = 32 && true - ++a && "" || "true"
          // true - 6 && "" || "true"
          // 1 - 5 && "" || "true"
          // -4 && "" || "true"
          // "" || "true"
          // "true"
console.log(exp2)

  //4
let exp3 = (true + 3) * 5 && undefined || "faraz" + 5
          // (4) * 5 && undefined || "faraz" + 5
          // 20 && undefined || "faraz" + 5
          // undefined || "faraz5"
          // "faraz5"
console.log(exp3)

  //5
let exp4 = 32 + "abc" || (true + false) + false || +5 || "true"
          // "32abc" || (1 + 0) + 0 || 5 || "true"
          // "32abc" ||  1 || 5 || "true"
          // "32abc"
console.log(exp4)

  //6
let exp5 = false || (true+true) + 15 && "" || 50
          // 0 || (1 + 1) + 15 && "" || 50
          // 17 && "" || 50
          // "" || 50
          // 50
console.log(exp5)

  //7
let exp6 = (true + false) + 5 || false + 8 + "abc" || "true"
          //(1 + 0) + 5 || 0 + 8 + "abc" || "true"
          // 6 || "8abc" || "true"
          //6
console.log(exp6)

  //8
let exp7 = "faraz" || false + 10 || "true"
          // "faraz" || 0 + 10 || "true"
          // "faraz" || 10 || "true"
          // "faraz"
console.log(exp7)

  //9
let exp8 = 12 + (false + false) + true && null || "faraz"
          // 12 + (0) + 1 && 0 || "faraz"
          // 13 && 0 || "faraz"
          // 0 || "faraz"
          // "faraz"
console.log(exp8)
 
  //10
let exp9 = (false + true + false + 2) || "faraz" && false || 1 + 10
          //(0 + 1 + 0 + 2) || "faraz" && false || 11
          //(3) || false || 11
          // 3 || 0 || 11
          // 3 || 11
          //3
console.log(exp9)

  //11
let exp10 = (true + false) + 5 || false + 8 + "abc" || "true"
           // (1 + 0) + 5 || 0 + 8 + "abc" || "true"
           // 6 || "8abc" || "true"
           //6
console.log(exp10)

  //12
let exp11 = (true + false) * 3 && "" || false + true - (12 + true + true + false)
           // (1 + 0) * 3 && "" || 0 + 1 - (12 + 1 + 1 + 0)
           // 3 && "" || 1 - (14)
           // "" || -13
           // -13
console.log(exp11)







//Q2

var mobiles = {
  iphone: {
    iphone7: {
      image : "iphone7.jpg",
      modelName : "iphone7",
      processor: "Snapdragon 8 Gen 2",
      memory: {
        ram: 12,
        storage: 512,
      },

      display : {
        size : 5.44,
        resolution : "750 x 1334 pixels",
        type : "Retina IPS LCD"
      },

      camera: {
        rear: {
          main: 200,
          ultrawide: 12,
          telephoto: 10,
          telephotoPeriscope: 10,
        },
        front: 10,
      },
      brand:"iphone",
      batteryCapacity: 5000,
      operatingSystem: "Android 13",
      specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },

    iphone8: {
      image : "iphone8.jpg",
      modelName : "iphone8",
      processor: "Snapdragon 12 Gen 5",
      memory: {
        ram: 8,
        storage: 256,
      },

      display : {
          size : "4.7 inches",
          resolution : "750px × 1334px",
          type : "Retina IPS LCD"
        },

      brand:"iphone",
      camera: {
        rear: {
          main: 180,
          ultrawide: 15,
          telephoto: 10,
          telephotoPeriscope: 20,
        },
        front: 12,
      },
      batteryCapacity: 8000,
      operatingSystem: "iphone 8",
      specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },

    iphone8plus: {
      image : "iphone8plus.jpg",
      modelName : "iphone8plus",
      processor: "Snapdragon 5 Gen 6",
      memory: {
        ram: 8,
        storage: 128,
      },

      display : {
          size : "5.5-inch",
          resolution : "1920 x 1080px",
          type : "Retina IPS LCD"
        },

      brand:"iphone",

      camera: {
        rear: {
          main: 160,
          ultrawide: 18,
          telephoto: 10,
          telephotoPeriscope: 8,
        },
        front: 16,
      },
      batteryCapacity: 5000,
      operatingSystem: "iphone 8",
      specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },

    iphoneX: {
      image : "iphoneX.jpg",
      modelName : "iphoneX",
      processor: "Snapdragon 5 Gen 4",
      memory: {
        ram: 8,
        storage: 256,
      },

      display : {
          size : "5.8-inch",
          resolution : "2436×1125 px",
          type : "Super Retina OLED display"
        },

      brand:"iphone",

      camera: {
        rear: {
          main: 130,
          ultrawide: 16,
          telephoto: 10,
          telephotoPeriscope: 18,
        },
        front: 14,
      },
      batteryCapacity: 6000,
      operatingSystem: "iphone X",
      specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },

    iphone11: {
      image : "iphone11.jpg",
      modelName : "iphone11",
      processor: "Snapdragon 7 Gen 9",
      memory: {
        ram: 16,
        storage: 512,
      },

      display : {
          size : "6.1-inch",
          resolution : "1792 × 828 pixels",
          type : "IPS LCD"
        },

      camera: {
        rear: {
          main: 150,
          ultrawide: 24,
          telephoto: 16,
          telephotoPeriscope: 10,
        },
        front: 20,
      },
      brand:"iphone",

      batteryCapacity: 10000,
      operatingSystem: "iphone 11",
      specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },
  },


  xiaomi: {

    redmiA2: {
      image : "xiaomi_redmiA2.jpg",
      modelName: "Mi 12 Pro",
      display: {
        size: 6.73,
        resolution: "3200 x 1440",
        panelType: "AMOLED",
        refreshRate: 120,
          },
      brand:"xiaomi",

      processor: "Snapdragon 8 Gen 1",
      memory: {
        ram: 8,
        storage: 256,
      },
      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      batteryCapacity: 4600,
      operatingSystem: "Android 12",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },
    redmi10: {
      image : "xiaomi_redmi10.jpg",
      modelName: "Mi 8 Pro",
      display: {
        size: 5.73,
        resolution: "3000 x 1320",
        panelType: "AMOLED",
        refreshRate: 100,
      },
      brand:"xiaomi",
      processor: "Snapdragon 7 Gen 5",
      memory: {
        ram: 12,
        storage: 256,
      },
      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      brand:"xiaomi",

      batteryCapacity: 5000,
      operatingSystem: "Android 11",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },

    redmi11: {
      image : "xiaomi_redmi11.jpg",
      modelName: "Mi 14 Pro",
      display: {
        size: 6.0,
        resolution: "3000 x 1240",
        panelType: "AMOLED",
        refreshRate: 150,
      },
      brand:"xiaomi",

      processor: "Snapdragon 8 Gen 4",
      memory: {
        ram: 12,
        storage: 512,
      },
      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      batteryCapacity: 8000,
      operatingSystem: "Android 12",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },

    redmi12: {
      image : "xiaomi_redmi12.jpg",
      modelName: "Mi 12 Pro",
      display: {
        size: 7.4,
        resolution: "3200 x 1440",
        panelType: "AMOLED",
        refreshRate: 180,
      },
      brand:"xiaomi",

      processor: "Snapdragon 12 Gen 1",
      memory: {
        ram: 12,
        storage: 512,
      },
      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      batteryCapacity: 8000,
      operatingSystem: "Android 13",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },

    redmi13: {
      image : "xiaomi_redmi13.jpg",
      modelName: "Mi 14 Pro",
      display: {
        size: 8.03,
        resolution: "4200 x 1540",
        panelType: "AMOLED",
        refreshRate: 100,
      },
      brand:"xiaomi",

      processor: "Snapdragon 8 Gen 6",
      memory: {
        ram: 12,
        storage: 256,
      },
      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      batteryCapacity: 10000,
      operatingSystem: "Android 13",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },

    redmi13C: {
      image : "xiaomi_redmi13c.jpg",
      modelName: "Mi 14 Pro",
      display: {
        size: 8.43,
        resolution: "4200 x 1340",
        panelType: "AMOLED",
        refreshRate: 100,
      },
      processor: "Snapdragon 9 Gen 5",
      memory: {
        ram: 12,
        storage: 512,
      },
      brand:"xiaomi",

      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      batteryCapacity: 10000,
      operatingSystem: "Android 13",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },
  },
  realme: {
    realmeNote50: {
      image : "realme_note50.jpg",
      brand: "Realme",
      modelName: " realmeNote50 ",
      display: {
        size: "6.5 inches",
        resolution: "FHD+ (1080 x 2400 pixels)",
        type: "AMOLED",
      },
      brand:"xiaomi",

      processor: "Qualcomm Snapdragon 8 Gen 1", 
      memory: {
        ram: "8GB",
        storage: "128GB",
      },
      camera: {
        rear: {
          resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
        },
        front: {
          resolution: "16MP",
        },
      },
      batteryCapacity: {
        capacity: "5000mAh",
        fastCharging: "65W",
      },
      operatingSystem: "Android 12",
      specialFeatures: [
        "In-display fingerprint sensor",
        "3.5mm headphone jack",
      ],
    },

    realmeC67: {
      image : "realme_C67.jpg",
      brand: "Realme",
      modelName: "realmeC67", 
      display: {
        size: "6.7 inches",
        resolution: "FHD+ (1280 x 2100 pixels)",
        type: "AMOLED",
      },
      processor: "Qualcomm Snapdragon 6 Gen 4",
      memory: {
        ram: "8GB",
        storage: "256GB",
      },
      brand:"xiaomi",

      camera: {
        rear: {
          resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
        },
        front: {
          resolution: "14MP",
        },
      },
      batteryCapacity: {
        capacity: "5000mAh",
        fastCharging: "65W",
      },
      operatingSystem: "Android 11",
      specialFeatures: [
        "In-display fingerprint sensor",
        "3.5mm headphone jack",
      ],
    },

    realmeC53: {
      image : "realme_C53.jpg",
      brand: "Realme",
      modelName: "realmeC53",
      display: {
        size: "7. 1inches",
        resolution: "FHD+ (1180 x 2500 pixels)",
        type: "AMOLED",
      },
      processor: "Qualcomm Snapdragon 8 Gen 6", 
      memory: {
        ram: "12GB",
        storage: "128GB",
      },
      brand:"xiaomi",

      camera: {
        rear: {
          resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
        },
        front: {
          resolution: "18MP",
        },
      },
      batteryCapacity: {
        capacity: "8000mAh",
        fastCharging: "65W",
      },
      operatingSystem: "Android 12",
      specialFeatures: [
        "In-display fingerprint sensor",
        "3.5mm headphone jack",
      ],
    },
    realme9: {
      image : "realme_9.jpg",
      brand: "Realme",
      modelName: "realme9", 
      display: {
        size: "7.2 inches",
        resolution: "FHD+ (1180 x 2200 pixels)",
        type: "AMOLED",
      },
      processor: "Qualcomm Snapdragon 9 Gen 6", 
      memory: {
        ram: "12GB",
        storage: "256GB",
      },
      brand:"xiaomi",

      camera: {
        rear: {
          resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
        },
        front: {
          resolution: "24MP",
        },
      },
      batteryCapacity: {
        capacity: "10000mAh",
        fastCharging: "75W",
      },
      operatingSystem: "Android 12",
      specialFeatures: [
        "In-display fingerprint sensor",
        "3.5mm headphone jack",
      ],
    },
    realme9i: {
      image : "realme_9i.jpg",
      brand: "Realme",
      modelName: "realme91", 
      display: {
        size: "6.9 inches",
        resolution: "FHD+ (1480 x 2400 pixels)",
        type: "AMOLED",
      },
      brand:"xiaomi",

      processor: "Qualcomm Snapdragon 8 Gen 1",
      memory: {
        ram: "12GB",
        storage: "512GB",
      },
      camera: {
        rear: {
          resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
        },
        front: {
          resolution: "16MP",
        },
      },
      batteryCapacity: {
        capacity: "2000mAh",
        fastCharging: "70W",
      },
      operatingSystem: "Android 13",
      specialFeatures: [
        "In-display fingerprint sensor",
        "3.5mm headphone jack",
      ],
    },
  },
  samsung: {
    samsung_Galaxy_S24: {
      image : "samsung_galaxy_S24.jpg",
      brand: "Samsung",
      modelName: "Galaxy S24 Ultra", 

      display : {
          displaySize: 6.8, 
          displayResolution: "3088x1440",
          displayType: "AMOLED",    
      },

      processor: "Snapdragon 8 Gen 2",
      memory: {
          ram: 12,
          storage: 512,
        },

      rearCamera: {
        megapixel: 108,
        features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
      },
      frontCamera: {
        megapixel: 40,
      },

      // batteryCapacity
      batteryCapacity: 5000, // mAh
      fastCharging: "45W Super Fast Charging",

      // Operating System
      operatingSystem: "Android 14",

      // Additional Specs (Optional)
      fingerprintSensor: true,
      waterResistance: "IP68",
      expandableStorage: false,
    },
    samsung_Galaxy_S51: {
      image : "samsung_galaxy_S51.jpg",
      brand: "Samsung",
      modelName: "samsung_Galaxy_S51", // Replace with specific model

      // Display
      display : {
          displaySize: 7.2, // Inches
          displayResolution: "3088x1440",
          displayType: "AMOLED",
      },

      // Processor & Memory
      processor: "Snapdragon 9 Gen 4", // Replace with actual processor
      memory: {
          ram: 8,
          storage: 128,
        },

      // Cameras
      rearCamera: {
        megapixel: 112,
        features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
      },
      frontCamera: {
        megapixel: 40,
      },

      // batteryCapacity
      batteryCapacity: 8000, // mAh
      fastCharging: "45W Super Fast Charging",

      // Operating System
      operatingSystem: "Android 11",

      // Additional Specs (Optional)
      fingerprintSensor: true,
      waterResistance: "IP68",
      expandableStorage: false,
    },
    samsung_Galaxy_Prime: {
      image : "samsung_galaxy_prime.jpg",
      brand: "Samsung",
      modelName: " samsung_Galaxy_Prime", // Replace with specific model

      // Display
      display : {
          displaySize: 7.4, // Inches
          displayResolution: "3088x1440",
          displayType: "AMOLED",
      },

      // Processor & Memory
      processor: "Snapdragon 8 Gen 10", // Replace with actual processor
      memory: {
          ram: 4,
          storage: 64,
        },

      // Cameras
      rearCamera: {
        megapixel: 108,
        features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
      },
      frontCamera: {
        megapixel: 40,
      },

      // batteryCapacity
      batteryCapacity: 5000, // mAh
      fastCharging: "45W Super Fast Charging",

      // Operating System
      operatingSystem: "Android 13",

      // Additional Specs (Optional)
      fingerprintSensor: true,
      waterResistance: "IP68",
      expandableStorage: false,
    },
    samsung_Galaxy_S4: {
      image : "samsung_galaxy_S4.jpg",
      brand: "Samsung",
      modelName: "samsung_Galaxy_S4", // Replace with specific model

      // Display
      display : {
          displaySize: 5.11, // Inches
          displayResolution: "3088x1440",
          displayType: "AMOLED"
      },

      // Processor & Memory
      processor: "Snapdragon 8 Gen 2", // Replace with actual processor
      memory: {
          ram: 6,
          storage: 64,
        },

      // Cameras
      rearCamera: {
        megapixel: 108,
        features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
      },
      frontCamera: {
        megapixel: 40,
      },

      // batteryCapacity
      batteryCapacity: 20000, // mAh
      fastCharging: "65W Super Fast Charging",

      // Operating System
      operatingSystem: "Android 14",

      // Additional Specs (Optional)
      fingerprintSensor: true,
      waterResistance: "IP68",
      expandableStorage: false,
    },
    samsung_Galaxy_S7: {
      image : "samsung_galaxy_S7.jpg",
      brand: "Samsung",
      modelName: "samsung_Galaxy_S7", // Replace with specific model

      // Display
      display : {
          displaySize: 8.5, // Inches
      displayResolution: "3088x1440",
      displayType: "AMOLED",
      },

      // Processor & Memory
      processor: "Snapdragon 12 Gen 24", // Replace with actual processor
      memory: {
          ram: 12,
          storage: 512,
        },

      // Cameras
      rearCamera: {
        megapixel: 158,
        features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
      },
      frontCamera: {
        megapixel: 40,
      },

      // batteryCapacity
      batteryCapacity: 20000, // mAh
      fastCharging: "85W Super Fast Charging",

      // Operating System
      operatingSystem: "Android 14",

      // Additional Specs (Optional)
      fingerprintSensor: true,
      waterResistance: "IP68",
      expandableStorage: true,
    },
  },
};

let brand = document.getElementById('brand');
let model = document.getElementById('model');


var brandsKeys = Object.keys(mobiles)

for(var i = 0;i<brandsKeys.length;i++){

brand.innerHTML += `<option>${brandsKeys[i]}</option>`
}

function selectBrand(){
  model.innerHTML = ""
  let selectBrand = brand.value;
  let allModels = Object.keys(mobiles[selectBrand]);
  
  for(var i = 0;i<allModels.length;i++){
      model.innerHTML += `<option>${allModels[i]}</option>` 
      }

}

function searchBtn(){
  let Card = document.getElementById('cardPortion');

  var filterObj = mobiles[brand.value][model.value];

  let display = "";

  let memory = ""

  let batteryInformation = ""

  for(let i = 0; i < Object.keys(filterObj.display).length;i++){
      display += `<p>${Object.keys(filterObj.display)[i]}: ${Object.values(filterObj.display)[i]}</p>`
  }

  for(let i = 0; i < Object.keys(filterObj.memory).length;i++){
      memory += `<p>${Object.keys(filterObj.memory)[i]}: ${Object.values(filterObj.memory)[i]}</p>`
  }

  for(let i = 0; i < Object.keys(filterObj.batteryCapacity).length;i++){
      if (typeof filterObj.batteryCapacity == "object"){
          batteryInformation += `<p>${Object.keys(filterObj.batteryCapacity)[i]}: ${Object.values(filterObj.batteryCapacity)[i]}</p>`
      }
  }
 
  let battery = "";
  
  if(batteryInformation == ""){
     battery  += filterObj.batteryCapacity + "mAh"
  }else{
      battery += batteryInformation
  }


  Card.innerHTML = `<div style="margin-left : 35% !important;"class="mt-5">
  <div class="card" style="width: 18rem;">
<div class="card-body">
  <img class="card-title fs-3 mb-4" src="images/${filterObj.image}"></img>
  <h5 class="card-title fs-3 mb-4">${filterObj.modelName}</h5>
  <h4 class="card-text mb-2 mt-2"><b>Operating System</b>: ${filterObj.operatingSystem}</h4>
  <h4 class="card-text"><b>Processor</b>: ${filterObj.processor}</h4>
  <h4 class="card-text"><b>Memory</b>: ${memory}</h4>
  <h4 class="card-text"><b>Display</b>: ${display}</h4>
  <h4 class="card-text"><b>Battery</b>: ${battery}</h4>

</div>
</div>
  </div>`

}