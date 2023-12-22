const Benefits = () => {
    return (
        <div className="py-10 bg-gray-50">
            <h3 className="text-3xl font-bold text-center mb-2">Who Can Benefit?</h3>
            <p className="w-[200px] mx-auto border border-sky-700"></p>
            <p className="max-w-[600px] mx-auto text-center mt-2">Discover how SynergyTask caters to the unique needs of different professionals</p>
            <div className="w-max mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
                <div className="border max-w-[300px] md:max-w-[350px] mx-auto p-2 bg-white shadow-lg py-5">
                    <h4 className="text-xl font-bold text-center mb-2">Developers</h4>
                    <p className="text-gray-500 text-center">Enhance your productivity with advanced project tracking and collaboration features.</p>
                </div>
                <div className="border max-w-[300px] md:max-w-[350px] mx-auto p-2 bg-white shadow-lg py-5">
                    <h4 className="text-xl font-bold text-center mb-2">Corporate Professionals</h4>
                    <p className="text-gray-500 text-center">Streamline workflows and improve team collaboration for corporate projects.</p>
                </div>
                <div className="border max-w-[300px] md:max-w-[350px] mx-auto p-2 bg-white shadow-lg py-5">
                    <h4 className="text-xl font-bold text-center mb-2">Bankers</h4>
                    <p className="text-gray-500 text-center">Efficiently manage tasks and deadlines in the fast-paced banking environment.</p>
                </div>
            </div>
        </div>
    );
};

export default Benefits;