import React from 'react';

const Description = () => {
    return (
        <div className='description'>
            <div className='question1 answer'>
                <h2>1. How React works?</h2>
                <h3>Answer:</h3>
                <p>React ঝামেলাহীনভাবে ইন্টারেক্টিভ ডিজাইন তৈরি করে। অ্যাপ্লিকেশনের প্রতিটি ষ্টেটের জন্য সহজ ভিউ ডিজাইন করে, এবং যখনই ডেটা পরিবর্তন করা লাগে তখনই React দক্ষতার সাথে সঠিক কম্পোনেন্টটি আপডেট এবং রেন্ডার করে দিলেই হয় । এছাড়াও এটি এনক্যাপ্সুলেটেড কম্পোনেন্ট তৈরি করে যেগুলো নিজেরাই নিজেদের স্টেট পরিচালনা করে, অতঃপর তাদের একত্রিত করে জটিল UI গঠন করে।</p>
            </div>
            <div className='question2 answer'>
                <h2>2. props vs state?</h2>
                <h3>Answer:</h3>
                <p>Props:</p>
                <ul>
                    <li>Props are read only</li>
                    <li>Props can not be modified</li>
                </ul>
                <p>State</p>
                <ul>
                    <li>State changes can be asynchronous</li>
                    <li>State can be modified using this.setState</li>
                </ul>
            </div>
            <div className='question3 answer'>
                <h2>3. How useStae works?</h2>
                <h3>Answer:</h3>
            </div>
        </div>
        );
    };
    
    export default Description;