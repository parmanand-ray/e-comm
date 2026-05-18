const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const connectDB = require("./config/db");
const User = require("./model/User");
const Product = require("./model/Product");
const Order = require("./model/Order");

const seedData = async () => {
  try {
    // Connect to database
    await connectDB();
    console.log("📦 Starting database seeding...");

    // Clear existing data
    await User.deleteMany({});
    await Product.deleteMany({});
    await Order.deleteMany({});
    console.log("🗑️  Cleared existing data");

    // Create users
    const users = await User.create([
      {
        name: "John Doe",
        email: "john@example.com",
        password: await bcrypt.hash("password123", 10),
        role: "user",
        varified: true,
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        password: await bcrypt.hash("password123", 10),
        role: "user",
        varified: true,
      },
      {
        name: "Admin User",
        email: "admin@example.com",
        password: await bcrypt.hash("admin123", 10),
        role: "admin",
        varified: true,
      },
      {
        name: "Bob Wilson",
        email: "bob@example.com",
        password: await bcrypt.hash("password123", 10),
        role: "user",
        varified: false,
      },
    ]);
    console.log(`✅ Created ${users.length} users`);

    // Create products
    const products = await Product.create([
      {
        name: "Wireless Headphones",
        price: 79.99,
        description: "High-quality wireless headphones with noise cancellation",
        imageUrl: "https://via.placeholder.com/300?text=Headphones",
        category: "Electronics",
        stock: 50,
        rating: 4.5,
        numReviews: 23,
      },
      {
        name: "USB-C Cable",
        price: 12.99,
        description: "Durable USB-C charging and data cable",
        imageUrl: "https://via.placeholder.com/300?text=USB-C+Cable",
        category: "Accessories",
        stock: 200,
        rating: 4.7,
        numReviews: 145,
      },
      {
        name: "Portable Charger",
        price: 34.99,
        description: "20000mAh portable power bank for all devices",
        imageUrl: "https://via.placeholder.com/300?text=Power+Bank",
        category: "Electronics",
        stock: 75,
        rating: 4.3,
        numReviews: 89,
      },
      {
        name: "Phone Case",
        price: 19.99,
        description: "Protective TPU case for smartphones",
        imageUrl: "https://via.placeholder.com/300?text=Phone+Case",
        category: "Accessories",
        stock: 150,
        rating: 4.6,
        numReviews: 234,
      },
      {
        name: "Screen Protector",
        price: 9.99,
        description: "Tempered glass screen protector set of 2",
        imageUrl: "https://via.placeholder.com/300?text=Screen+Protector",
        category: "Accessories",
        stock: 300,
        rating: 4.4,
        numReviews: 112,
      },
      {
        name: "Wireless Charger",
        price: 29.99,
        description: "Fast wireless charging pad with LED indicator",
        imageUrl: "https://via.placeholder.com/300?text=Wireless+Charger",
        category: "Electronics",
        stock: 60,
        rating: 4.8,
        numReviews: 178,
      },
    ]);
    console.log(`✅ Created ${products.length} products`);

    // Create orders
    const orders = await Order.create([
      {
        user: users[0]._id,
        items: [
          {
            productid: products[0]._id,
            qty: 1,
            price: products[0].price,
          },
          {
            productid: products[1]._id,
            qty: 2,
            price: products[1].price,
          },
        ],
        totalAmount: products[0].price + products[1].price * 2,
        status: "delivered",
        address: {
          fullName: "John Doe",
          street: "123 Main St",
          city: "New York",
          postalCode: "10001",
          country: "USA",
        },
        paymentid: "pay_1234567890",
      },
      {
        user: users[1]._id,
        items: [
          {
            productid: products[2]._id,
            qty: 1,
            price: products[2].price,
          },
        ],
        totalAmount: products[2].price,
        status: "shipped",
        address: {
          fullName: "Jane Smith",
          street: "456 Oak Ave",
          city: "Los Angeles",
          postalCode: "90001",
          country: "USA",
        },
        paymentid: "pay_0987654321",
      },
      {
        user: users[0]._id,
        items: [
          {
            productid: products[3]._id,
            qty: 3,
            price: products[3].price,
          },
          {
            productid: products[5]._id,
            qty: 1,
            price: products[5].price,
          },
        ],
        totalAmount: products[3].price * 3 + products[5].price,
        status: "pending",
        address: {
          fullName: "John Doe",
          street: "123 Main St",
          city: "New York",
          postalCode: "10001",
          country: "USA",
        },
      },
      {
        user: users[3]._id,
        items: [
          {
            productid: products[4]._id,
            qty: 2,
            price: products[4].price,
          },
        ],
        totalAmount: products[4].price * 2,
        status: "pending",
        address: {
          fullName: "Bob Wilson",
          street: "789 Pine Rd",
          city: "Chicago",
          postalCode: "60601",
          country: "USA",
        },
      },
    ]);
    console.log(`✅ Created ${orders.length} orders`);

    console.log("\n🎉 Database seeding completed successfully!");
    console.log(`\n📊 Summary:`);
    console.log(`   Users: ${users.length}`);
    console.log(`   Products: ${products.length}`);
    console.log(`   Orders: ${orders.length}`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

// Run the seed function
seedData();
