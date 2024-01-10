
const Button = ({ label, iconURL}) => {
    return (
        <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-md leading-none bg-primary border-deep-green text-white rounded-md  hover:scale-95 duration-300">
            {label}
            {iconURL && 
            <img src={iconURL} alt="arrow right icon"
            className="ml-2 rounded-full w-5 h-5"
            />}
        </button>
    )
}

export default Button