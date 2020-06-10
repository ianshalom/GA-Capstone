import React from 'react';
import Teacher from '../images/teacher.jpg';


const Hero = () => 
<section className="hero is-default is-bold">
	          <div className="hero-body">
	            <div className="container">
	              <div className="columns is-vcentered">
	                <div className="column is-5 is-offset-1 landing-caption">
	                  <h1 className="title is-1 is-bold is-spaced">
	                      Learn, Grow, Connect
	                  </h1>
	                  <h2 className="subtitle is-5 is-muted">Put your free time to good use. Let's grow wizer.</h2>
	                  <p>
	                    <button className="button cta rounded primary-btn raised">
	                        Find a course
	                    </button>
	                  </p>
	                </div>
	                <div className="column is-5 is-offset-1">
	                  <figure className="image is-4by3">
	                      <img src={Teacher} alt="" />
	                  </figure>
	                </div>
	              </div>
	            </div>
	          </div>
        	</section>

export default Hero;