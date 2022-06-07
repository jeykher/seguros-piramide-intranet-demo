import react from 'react';
import { motion } from 'framer-motion';
import ReactLoading from 'react-loading';

import './Loader.scss';

import LoaderAnimation from '../../animations/Loader/LoaderAnimation';

const Loader = () => {
    return (
        <>
            <motion.div 
                className="ipos-loader-container"
                variants={LoaderAnimation}
                initial="hidden"
                animate="visible"
            >
                <ReactLoading 
                    type="bars"
                    color="#EE511C"
                    width={100}
                    height={100}
                />
            </motion.div>
        </>
    );
};

export default Loader;