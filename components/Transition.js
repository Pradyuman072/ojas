import  {motion} from 'framer-motion';

const transitionVariants = {
initial: {
    x: '100%',
    width: '100%'
},
animate:{
    x :'0%',
    width:"0%",
    },
exit:{
    x:['0%','100%'],
    width:['0%','100%'],
    }
};

const Transiton =()=>{
    return(
        <>
            <div className="relod-box" variants={transitionVariants} initial="initial" animate="animate" exit="exit" transition={{delay:0.2}}>1</div>
            <div>2</div>
            <div>3</div>
        </>
    )
}