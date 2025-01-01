import React from "react";
import './Blog.css'; 

const Blog = () => {
  return (
    <div className="blog-page">
      <h1>Blog</h1>
      <div className="blog-posts">
        <div className="blog-post">
          <img src="/Dog_1.jpg" alt="Post 1" />
          <h2>The Joy of Dog Companionship</h2>
          <p>
          Discover how dogs bring unconditional love, joy, and a sense of purpose to our lives. Learn why they’re truly man’s best friend!          </p>
        </div>
        <div className="blog-post">
          <img src="/Cat_2.jpg" alt="Post 2" />
          <h2>Why Cats Make Perfect Pets</h2>
          <p>
          Cats are independent yet affectionate. Explore the traits that make them ideal companions for busy households.          </p>
        </div>
        <div className="blog-post">
          <img src="/Cat_3.jpg" alt="Post 3" />
          <h2>Creating a Cat-Friendly Home</h2>
          <p>
          Tips and tricks to design a cozy, stimulating, and safe environment for your feline friend.
          </p>
        </div>

        <div className="blog-post">
          <img src="/dog_2.jpg" alt="Post 4" />
          <h2>Dog Training Made Easy: Tips for New Owners</h2>
          <p>
          A beginner’s guide to teaching your pup obedience, tricks, and good behavior. Transform your dog into a well-behaved companion!
          </p>
        </div>
        <div className="blog-post">
          <img src="/Cat_4.jpg" alt="Post 5" />
          <h2>Nutrition Tips for a Healthy Cat</h2>
          <p>
          From selecting the right food to understanding portion sizes, ensure your cat stays healthy and happy with proper nutrition.          </p>
        </div>
        <div className="blog-post">
          <img src="/dog_5.jpeg" alt="Post 6" />
          <h2>The Importance of Regular Dog Grooming</h2>
          <p>
          Grooming isn’t just about looks! Learn how regular grooming ensures a dog’s health, comfort, and happiness.
          </p>
        </div>
        <div className="blog-post">
          <img src="/Cat_5.jpg" alt="Post 7" />
          <h2>Decoding Cat Behavior</h2>
          <p>
          Ever wonder why your cat kneads or purrs? Unravel the mystery behind your feline friend’s quirky habits.          </p>
        </div>
  
        <div className="blog-post">
          <img src="/Photo_Katze_4.jpeg" alt="Post 8" />
          <h2>Photography</h2>
          <p>
            Photographed by Meenu Patel
          </p>
        </div>


      </div>
    </div>
  );
};

export default Blog;
