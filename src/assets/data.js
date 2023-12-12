

import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import img5 from './5.jpg'
import img6 from './6.jpg'
import img7 from './7.jpg'
import img8 from './8.jpg'
import img9 from './9.jpg'
import img10 from './10.jpg'
import img11 from './11.jpg'

import water from './water.jpg'
import treadmill from './treadmill.jpg'
import protein from './protein.jpg'
import gymbag from './gym bag.jpg'
import exerciseball from './exercise ball.jpg'
import gloves from './gloves.jpg'
import kettleball from './kettleball.jpg'
import jumprope from './jump rope.jpg'
import gggg from './donbell.jpg'




const dataset = [
        {
        "product_id": 1,
        "name": "Dumbbell Set",
        "category": "Strength Training",
        "price": 49.99,
        "stock_quantity": 100,
        "description": "A versatile set of dumbbells for effective strength training. Suitable for various exercises targeting different muscle groups.",
        "image": img1    }, 
 
    {
        "product_id": 2,
        "name": "Yoga Mat",
        "category": "Yoga",
        "price": 19.99,
        "stock_quantity": 200,
        "description": "High-quality yoga mat for comfortable and slip-resistant practice. Ideal for yoga, pilates, and floor exercises.",
        "image": img2    },
    {
        "product_id": 3,
        "name": "Running Shoes",
        "category": "Footwear",
        "price": 79.99,
        "stock_quantity": 150,
        "description": "Premium running shoes with excellent cushioning and support. Designed for comfort and performance during running or workouts.",
        "image": img3    },
    {
        "product_id": 4,
        "name": "Fitness Tracker",
        "category": "Wearables",
        "price": 129.99,
        "stock_quantity": 50,
        "description": "State-of-the-art fitness tracker to monitor your daily activities, heart rate, and sleep. Stay on top of your fitness goals.",
        "image": img4    },
    {
        "product_id": 5,
        "name": "Adjustable Weight Bench",
        "category": "Strength Training",
        "price": 129.99,
        "stock_quantity": 75,
        "description": "Sturdy and adjustable weight bench for a variety of strength training exercises. Customize your workouts with ease.",
        "image": img5    },
    {
        "product_id": 6,
        "name": "Jump Rope",
        "category": "Cardio",
        "price": 9.99,
        "stock_quantity": 120,
        "description": "Durable jump rope for effective cardio workouts. Suitable for both beginners and advanced fitness enthusiasts.",
        "image": jumprope    },
    {
        "product_id": 7,
        "name": "Resistance Bands Set",
        "category": "Strength Training",
        "price": 24.99,
        "stock_quantity": 100,
        "description": "Versatile set of resistance bands for targeted muscle workouts. Ideal for strength training and rehabilitation exercises.",
        "image": img7    },
    {
        "product_id": 8,
        "name": "Exercise Ball",
        "category": "Core Training",
        "price": 29.99,
        "stock_quantity": 80,
        "description": "Anti-burst exercise ball for core strengthening and stability exercises. Perfect for home workouts or gym sessions.",
        "image": img8    },
    {
        "product_id": 9,
        "name": "Kettlebell",
        "category": "Strength Training",
        "price": 39.99,
        "stock_quantity": 60,
        "description": "Cast iron kettlebell for dynamic strength and endurance workouts. Features a comfortable grip for controlled movements.",
        "image": kettleball    },
    {
        "product_id": 10,
        "name": "Foam Roller",
        "category": "Recovery",
        "price": 14.99,
        "stock_quantity": 90,
        "description": "High-density foam roller for myofascial release and muscle recovery. Relieve muscle tightness and improve flexibility.",
        "image": img10
    },
    {
        "product_id": 11,
        "name": "Gym Bag",
        "category": "Accessories",
        "price": 34.99,
        "stock_quantity": 100,
        "description": "Spacious gym bag with multiple compartments for organized storage of your workout essentials. Stylish and functional.",
        "image": gymbag
    },
    {
        "product_id": 12,
        "name": "Pull-Up Bar",
        "category": "Strength Training",
        "price": 49.99,
        "stock_quantity": 50,
        "description": "Sturdy pull-up bar for upper body strength development. Easily mounts on door frames for convenient home use.",
        "image": img11
    },
    {
        "product_id": 13,
        "name": "Workout Gloves",
        "category": "Accessories",
        "price": 12.99,
        "stock_quantity": 120,
        "description": "Comfortable and durable workout gloves to protect your hands during weightlifting and other fitness activities.",
        "image": gloves
    },
    {
        "product_id": 14,
        "name": "Treadmill",
        "category": "Cardio",
        "price": 599.99,
        "stock_quantity": 25,
        "description": "Motorized treadmill with adjustable incline and built-in programs. Bring the benefits of cardio workouts to your home.",
        "image": treadmill
    },
    {
        "product_id": 15,
        "name": "Cycling Helmet",
        "category": "Cycling",
        "price": 29.99,
        "stock_quantity": 80,
        "description": "Safety-certified cycling helmet with adjustable fit. Protect your head during cycling adventures or indoor cycling sessions.",
        "image": img4
    },
    {
        "product_id": 16,
        "name": "Water Bottle",
        "category": "Accessories",
        "price": 7.99,
        "stock_quantity": 150,
        "description": "BPA-free water bottle with a convenient flip-top lid. Stay hydrated during workouts and throughout the day.",
        "image": water
    },
    {
        "product_id": 17,
        "name": "Elliptical Machine",
        "category": "Cardio",
        "price": 799.99,
        "stock_quantity": 30,
        "description": "Elliptical machine for low-impact, full-body cardio workouts. Features adjustable resistance levels and built-in programs.",
        "image": img6
    },
    {
        "product_id": 18,
        "name": "Weighted Vest",
        "category": "Cardio",
        "price": 49.99,
        "stock_quantity": 40,
        "description": "Adjustable weighted vest for added resistance during running, walking, or bodyweight exercises. Enhance your cardio workouts.",
        "image": img7
    },
    {
        "product_id": 19,
        "name": "Rowing Machine",
        "category": "Cardio",
        "price": 499.99,
        "stock_quantity": 20,
        "description": "Compact rowing machine for effective full-body workouts. Simulates the natural motion of rowing for cardiovascular fitness.",
        "image": img8
    },
    {
        "product_id": 20,
        "name": "Protein Powder",
        "category": "Nutrition",
        "price": 29.99,
        "stock_quantity": 100,
        "description": "High-quality protein powder to support muscle recovery and growth. Ideal for post-workout shakes and protein-rich recipes.",
        "image": protein
    },
    {
        "product_id": 21,
        "name": "Weightlifting Belt",
        "category": "Accessories",
        "price": 19.99,
        "stock_quantity": 70,
        "description": "Durable weightlifting belt for lumbar support during heavy lifts. Provides stability and helps prevent injuries.",
        "image": img10
    },
    {
        "product_id": 22,
        "name": "TRX Suspension Trainer",
        "category": "Strength Training",
        "price": 69.99,
        "stock_quantity": 45,
        "description": "Versatile TRX suspension trainer for bodyweight exercises. Easily adjustable for various fitness levels and workout intensities.",
        "image": img11
    },
    {
        "product_id": 23,
        "name": "Exercise Bike",
        "category": "Cardio",
        "price": 349.99,
        "stock_quantity": 35,
        "description": "Stationary exercise bike for effective cardiovascular workouts. Adjustable resistance levels and comfortable seat for long rides.",
        "image": img1
    },
    {
        "product_id": 24,
        "name": "Fitness DVD Set",
        "category": "Workout Programs",
        "price": 24.99,
        "stock_quantity": 60,
        "description": "Comprehensive fitness DVD set with a variety of workout programs. Bring professional workouts to the comfort of your home.",
        "image": img2
    },
    {
        "product_id": 25,
        "name": "Sauna Suit",
        "category": "Fitness Apparel",
        "price": 29.99,
        "stock_quantity": 50,
        "description": "Sauna suit for heat retention during workouts. Promotes sweat and can aid in temporary water weight loss.",
        "image": gggg
    }
]

 
export default dataset 