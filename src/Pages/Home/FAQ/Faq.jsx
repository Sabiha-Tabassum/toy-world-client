import React from 'react';

const Faq = () => {
    return (
        <div>
            <div>
                <h1 className='text-center font-bold text-4xl mt-44 mb-10'>Frequently Asked Question</h1>
            </div>
            <div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box w-96 mx-auto">
                    <div className="collapse-title text-xl font-medium">
                        How much for shipping?
                    </div>
                    <div className="collapse-content">
                        <p>"The shipping cost for your order will depend on the destination, package weight, and shipping method chosen during checkout. We offer various shipping options to provide flexibility and cost-effective solutions. You can calculate the shipping cost by adding the desired items to your cart and proceeding to the checkout page. Our system will automatically calculate the shipping cost based on your location and chosen shipping method."</p>
                    </div>
                </div>
            </div>
            <div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box w-96 mx-auto">
                    <div className="collapse-title text-xl font-medium">
                        How do I cancle my subscription?
                    </div>
                    <div className="collapse-content">
                        <p>"To cancel your subscription, please follow the steps below:</p>
                        <ul>
                            <li className='font-semibold mb-2'>Log in to your account on our website.</li>
                            <li className='font-semibold mb-2'>Navigate to the 'Subscription' section.</li>
                            <li className='font-semibold mb-2'>Look for the option to manage or cancel your subscription.</li>
                            <li className='font-semibold mb-2'>Click on the 'Cancel' or 'Unsubscribe' button.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box w-96 mx-auto">
                    <div className="collapse-title text-xl font-medium">
                        Will I be able to cancle anytime?
                    </div>
                    <div className="collapse-content">
                        <p>"Yes, you will have the flexibility to cancel your subscription at any time. We believe in providing our customers with convenience and control over their subscription. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;