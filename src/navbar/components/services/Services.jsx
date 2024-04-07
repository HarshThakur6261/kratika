import "./services.scss";
import { motion, useInView,} from "framer-motion";
import { useRef } from "react";

const variants = {
    initial:{
        x: -500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren: 0.1,
        },
    },
};
 const Services = () => {

    const ref = useRef();
    const isInView = useInView(ref,{margin:"-100px"});
    // const history = useHistory(); // Initialize useHistory

    // const handleGoClick = () => {
    //     // Navigate to a new page when "Go" button is clicked
    //     history.push("/new-page"); // Replace "/new-page" with your desired URL
    // };
    return(
        <motion.div 
            className="services" 
            variants={variants} 
            initial="initial" 
            // whileInView= "animate"
            ref={ref}
            animate={isInView && "animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>We focus on simplifying finances, empowering users
                    <br /> to manage effectively.
                </p>
                <hr/>
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                      <motion.b whileHover={{color:"orange"}}>Unique </motion.b>Features
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>For </motion.b>You  .
                    </h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}><h2>E-Wallet with Sectional Allocation
</h2>
                <p>Dividing the E-Wallet into sections like food, grocery, and investment allows users to allocate their funds according to their budget and financial goals.
Providing users with the option to choose the section at the time of payment ensures that their expenses are properly categorized and tracked.
                </p>
                <button >Go</button> {/* Add onClick event handler */}
                </motion.div>

                <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}><h2>SIP-Gullak</h2>
                <p>Offering round-off functionality for payable amounts can help users save small amounts of money over time by rounding up their purchases to the nearest dollar or other specified amount.

Automatic deductions from daily payments for investment in SIP is a convenient feature that allows users to invest in a disciplined manner without having to make separate transactions.
                </p>
                <button>Go</button>
                </motion.div>

                <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}><h2>Expense Tracking and Analysis </h2>
                <p>Sort expenses monthly for overspending insights. Analyze with pie charts and graphs for clear visuals.
                </p>
                <button>Go</button>
                </motion.div>

                <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}><h2>Goal Tracker</h2>
                <p>The app automatically analyzes your monthly spending across different categories, identifying areas where you can potentially save.
 Based on your spending patterns and financial goals, the app generates a personalized saving plan.
                </p>
                <button>Go</button>
                </motion.div>


            </motion.div>

        </motion.div>

    );

};

export default Services;