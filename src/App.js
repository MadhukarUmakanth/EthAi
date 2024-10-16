import React from 'react';
import { FaTelegram, FaInstagram, FaFacebook, FaDiscord, FaTimes } from 'react-icons/fa';


import './App.css'

function App() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-black flex flex-col justify-center items-center text-white relative">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full flex justify-between p-6">
        <div className="text-lg font-bold">EthAi</div>
        <div className="flex space-x-4">
          <button className="text-sm hover:text-gray-400">Log In</button>
          <button className="bg-white text-black rounded-full px-4 py-2">Whitepaper</button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="absolute top-0 left-0 w-full flex justify-center mt-16">
      <ul className="flex space-x-4 bg-[#00161D] p-4 rounded-full">
        <li className="hover:bg-gray-600 px-4 py-2 rounded-full">
          <a href="#sectionFeature" className="text-white">Features</a>
        </li>
        <li className="hover:bg-gray-600 px-4 py-2 rounded-full">
          <a href="#sectionWhy" className="text-white">Why Us</a>
        </li>
        <li className="hover:bg-gray-600 px-4 py-2 rounded-full">
          <a href="#tokenomics" className="text-white">Tokenomics</a>
        </li>
        <li className="hover:bg-gray-600 px-4 py-2 rounded-full">
          <a href="#roadmap" className="text-white">Roadmap</a>
        </li>
      </ul>
    </nav>

      {/* Main Content */}
      <div className="text-center">
        <h1 className="text-5xl font-bold">When Innovation Meets <span className="text-blue-400">Investment</span></h1>
        <p className="mt-4 text-lg">Empowering Trading Through Advanced Technology</p>
        <button className="mt-8 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600">Open dApp</button>
      </div>

      {/* Footer */}
      
    </div>
    <div className="bg-[#00161D] min-h-screen p-5 sm:p-10">

      <div id='sectionFeature'>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-start max-w-[1200px] mx-auto">
        
        {/* Card 1 */}
        <div className="w-full sm:w-[280px] h-auto sm:h-[504px] pt-[72px] pb-[32px] px-[10px] sm:px-[37px] rounded-tl-[56px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[16px] bg-[#0c2b2fb2] flex flex-col">
          {/* Image Instead of Icon */}
          <div className="flex items-center justify-center mb-4">
            <img 
              src="https://i.ibb.co/bryVTbp/Rectangle-3.png" 
              alt="Trade Optimizer" 
              className="w-[100px] h-[100px] rounded-tl-[16px] border-t-[6px] border-l-0 border-r-0 border-b-0 hidden sm:block"
            />
            <img 
            src="https://i.ibb.co/sKTF3D7/Group-21.png"
            alt='moblie-img'
            className='block sm:hidden'
            />
          </div>

          {/* Title and Description Container */}
          <div className="flex flex-col mt-auto text-center mb-2">
            <h3 className="text-white tracking-[-0.44px] text-[22px] font-medium">Trade Optimizer</h3>
            <p className="text-[#b0faffb2] mb-2.5 text-[16px] font-normal leading-[24px]">
              Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.
            </p>
          </div>
        </div>

        {/* Column for Card 2 and Empty Card */}
        <div className="flex flex-col gap-4 w-full sm:w-auto">
          <div className="rounded-[16px] border border-[#0f373c] border-[1px] border-solid bg-[#0c2b2fb2] flex items-center p-8" style={{ width: '100%', maxWidth: '608px', height: '198px' }}>
            <div className="w-[360px] h-auto opacity-100">
              <h3 className="text-white ml-1 tracking-[-0.44px] text-[22px] font-medium">Market Insight</h3>
              <p className="text-[#b0faffb2] mb-2.5 text-[16px] font-normal leading-[24px]">
                Stay ahead of the market. Get real-time updates on market trends, track top traders’ movements, and spot signals from key influencers.
              </p>
            </div>
            {/* Icon */}
            <div className="flex items-center justify-center h-16 w-16 mr-4">
              <div className="w-12 h-12 rounded-md">
                <img src='https://i.ibb.co/PZyNjjM/Container-1.png'
                alt="iimag"
                className='block sm:hidden  w-[170px] h-[170px] pt-0'
                />
              </div>
            </div>
          </div>

          {/* Empty Card Below Card 2 */}
          <div className="w-full h-[290px] rounded-[16px] bg-[#0c2b2fb2] opacity-100 hidden sm:block">
            {/* You can add any content here if needed */}
          </div>
        </div>



        {/* Card 3 */}
        <div className="w-full sm:w-[280px] h-auto sm:h-[504px] pt-[72px] pb-[32px] px-[10px] sm:px-[37px] rounded-tr-[56px] rounded-bl-[16px] rounded-br-[16px] bg-[#0c2b2fb2] flex flex-col">
          {/* Image Instead of Icon */}
          <div className="flex items-center justify-center mb-4 h-16 w-16">
            <img 
              src="https://i.ibb.co/MCBJXJ9/l1-Nt-BTj8px6kz-RLIsc-Is56-ETWRE-svg-1.png"
              alt="Risk Guard"
              className="w-[100%] h-[236px] mt-[18px] mx-auto pt-8 pl-5 hidden sm:block" // Set width to 80% and center it
            />
          </div>
          {/* Title and Description Container */}
          <div className="flex flex-col mt-auto text-center">
            <h3 className="text-white tracking-[-0.44px] text-[22px] font-medium">Risk Guard</h3>
            <p className="text-[#b0faffb2] mb-2.5 text-[16px] font-normal leading-[24px]">
              Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.
            </p>
            <img 
            src='https://i.ibb.co/QvmpK3m/Container.png'
            alt='aiimage'
            className='block sm:hidden'
            />
          </div>
        </div>

      </div>



      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
        {/* Card 4 */}
        <div className="flex justify-center items-start w-full sm:w-[446px] h-[240px] border border-solid border-[#0f373c] bg-[#0c2b2fb2] rounded-tl-[16px] rounded-tr-[16px] rounded-bl-[56px] rounded-br-[16px] pl-6 pr-6 gap-2">      
          <div className="mt-8 gap-[6px] flex flex-col items-start flex-1">
            <h3 className="font-medium text-[22px] leading-[26px] tracking-[-0.44px] text-left text-white" style={{ fontFamily: 'var(--fontfamilyFont1)' }}>Portfolio Sync</h3>
            <p className="text-[#b0faffb2] mb-2.5 text-[16px] font-normal leading-[24px]">
              Easily manage your portfolio. You'll always know what you own, how it’s performing, and where it's headed.
            </p>
          </div>
        </div>




        {/* Card 5 */}
        <div className="w-full sm:w-[738px] h-[240px] pt-8 px-0 rounded-tl-[16px] rounded-tr-[16px] rounded-br-[56px] rounded-bl-[16px] opacity-100 bg-[#0c2b2fb2] flex flex-col relative">
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col items-start w-[299px] h-[158px] pl-4">
              <h3 className="text-white tracking-[-0.44px] text-[22px] font-medium">Opportunity Scout</h3>
              <p className="text-[#b0faffb2] mb-2.5 text-[16px] font-normal leading-[24px]">
                Find exciting new projects, events, and tokens that others might be missing. Identifying promising opportunities early so you never miss out on the next big thing.
              </p>
            </div>
            {/* Image */}
            <img 
              src="https://i.ibb.co/WH6LLpG/OBJECTS.png" // Replace with your image URL
              alt="Opportunity Scout"
              className="w-[218px] h-[218px] absolute top-0 right-0" // Adjust width and height as needed
            />
          </div>
        </div>
      </div>


      </div>

      <div className='text-center pt-8 mt-40 bg-[#00161D]'>

                        <div id='sectionWhy'>
                  <h1 className='text-white tracking-tight text-[40px] font-medium'>About EthAi</h1>
                  <p className='text-[#b0faffb2] text-center text-[16px] font-normal self-stretch leading-[24px] pt-7'>
                    At EthAi, we’re all about making crypto trading easier and more intuitive. We provide 
                    tools<br/> that help traders keep up with all new market trends, track top traders’ movements.
                  </p>
                  
                  <div className="flex justify-center items-center pt-8 ">
                    <button className='text-[#0b2a2d] px-[18px] rounded-[12px] tracking-[-0.28px] text-[14px] font-medium bg-[#cdfcff] shadow-[0_6px_20px_0_#37c5e51e] text-center flex items-center justify-center flex-row h-[40px] min-w-[108px] '>
                      Read more
                    </button>

                  </div>
                  <div className='flex justify-center mt-10'>
                  <div className='pt-[48px] pb-[48px] pl-[62px] pr-[62px] rounded-[20px] gap-[36px] w-[744px] grid bg-[#08252a] row-gap-[40px] grid-cols-2'>

                <div className="flex flex-col items-center gap-[12px] w-full"> {/* Added flex and flex-col classes */}
                <img src="https://i.ibb.co/82BdSTX/graph.png" alt="graph" className="mb-4" /> {/* Added margin-bottom for spacing */}
                <h1 className='text-white tracking-[-0.36px] text-[18px] font-medium'>Stay Ahead</h1>
                <p className='text-[#b0faffb2] text-[16px] font-normal w-full leading-[24px] text-center'> {/* Added text-center for alignment */}
                  No more guesswork—get <br/>clear, trustable insights.
                </p>
                </div>


                <div className="flex flex-col items-center gap-[12px] w-full"> {/* Added flex and flex-col classes */}
                <img src="https://i.ibb.co/yyrp5qY/wallet.png" alt="graph" className="mb-4" /> {/* Added margin-bottom for spacing */}
                <h1 className='text-white tracking-[-0.36px] text-[18px] font-medium'>Know Your Assets</h1>
                <p className='text-[#b0faffb2] text-[16px] font-normal w-full leading-[24px] text-center'> {/* Added text-center for alignment */}
                Always stay on top of how your investments are performing.


                </p>
                </div>

                <div className="flex flex-col items-center gap-[12px] w-full"> {/* Added flex and flex-col classes */}
                <img src="https://i.ibb.co/YjrbFCN/Tools.png" alt="graph" className="mb-4" /> {/* Added margin-bottom for spacing */}
                <h1 className='text-white tracking-[-0.36px] text-[18px] font-medium'>Simple, Not Overwhelming</h1>
                <p className='text-[#b0faffb2] text-[16px] font-normal w-full leading-[24px] text-center'> {/* Added text-center for alignment */}
                Our tools are designed to make complex market analysis easy to understand and act on.
                </p>
                </div>

                <div className="flex flex-col items-center gap-[12px] w-full"> {/* Added flex and flex-col classes */}
                <img src="https://i.ibb.co/rbhYrSb/Future-Technology.png" alt="graph" className="mb-4" /> {/* Added margin-bottom for spacing */}
                <h1 className='text-white tracking-[-0.36px] text-[18px] font-medium'>Future-Proof</h1>
                <p className='text-[#b0faffb2] text-[16px] font-normal w-full leading-[24px] text-center'> {/* Added text-center for alignment */}
                We’re constantly improving, adding new features to help you make the most informed decisions possible.
                </p>
                </div>

                </div>
                </div>

  </div>
  <div className="mt-20 gap-[70px] flex w-full flex-col items-center" id='tokenomics'>
  <h1 className="text-white tracking-[-0.8px] text-[40px] font-medium">Tokenomics</h1>
  <div className="flex justify-center items-start gap-6"> {/* Added flex container for alignment */}
    <img 
      src='https://i.ibb.co/WBcD3J3/Donut.png'
      alt='donut' 
      className="flex opacity-100" 
      style={{ width: '490px', height: '522px' }}
    />
    
    <div className="flex flex-col gap-6"> {/* Wrap the two cards in a flex container */}
      <div className="flex gap-0 opacity-100 p-[12px] rounded-l-[20px] rounded-r-none bg-[#0C2B2FB2]" style={{ width: '538px', height: '324px', padding: '12px 56px' }}>
        <ul className="flex flex-col" style={{ width: '82%' }}>
          <li className="flex mt-4">
            <span className="whitespace-pre text-white tracking-[-0.1px] text-[20px] font-normal w-[180px]">Name :</span>
            <span className="text-white tracking-[-0.1px] text-[20px] font-normal">EthAi</span>
          </li>
          <li className="flex mt-2">
            <span className="whitespace-pre text-white tracking-[-0.1px] text-[20px] font-normal w-[180px]">Token Name :</span>
            <span className="text-white tracking-[-0.1px] text-[20px] font-normal">$EthAi</span>
          </li>
          <li className="flex mt-2">
            <span className="whitespace-pre text-white tracking-[-0.1px] text-[20px] font-normal w-[180px]">Token Standard :</span>
            <span className="text-white tracking-[-0.1px] text-[20px] font-normal">ERC20</span>
          </li>
          <li className="flex mt-2">
            <span className="whitespace-pre text-white tracking-[-0.1px] text-[20px] font-normal w-[180px]">BlockChain :</span>
            <span className="text-white tracking-[-0.1px] text-[20px] font-normal">Ethereum</span>
          </li>
          <li className="flex mt-2">
            <span className="whitespace-pre text-white tracking-[-0.1px] text-[20px] font-normal w-[180px]">Total Supply :</span>
            <span className="text-white tracking-[-0.1px] text-[20px] font-normal">100 Million</span>
          </li>
          <li className="flex mt-2">
            <span className="whitespace-pre text-white tracking-[-0.1px] text-[20px] font-normal w-[180px]">Tax :</span>
            <span className="text-white tracking-[-0.1px] text-[20px] font-normal">50%/5%</span>
          </li>
        </ul>
      </div>

      <div className="mr-6 pt-3 pb-3 pl-14 pr-14 rounded-[20px] bg-[#0c2b2fb2] flex flex-col">
        <ul className="flex flex-col" style={{ width: '82%' }}>
          <li className="flex mt-4">
            <span className="whitespace-pre text-white tracking-[-0.1px] text-[20px] font-normal">Team :</span>
            <span className="text-white tracking-[-0.1px] text-[20px] font-normal">35%</span>
          </li>
          <li className="flex mt-2">
            <span className="whitespace-pre text-white tracking-[-0.1px] text-[20px] font-normal">Marketing :</span>
            <span className="text-white tracking-[-0.1px] text-[20px] font-normal">5%</span>
          </li>
          <li className="flex mt-2">
            <span className="whitespace-pre text-white tracking-[-0.1px] text-[20px] font-normal">Liquidity :</span>
            <span className="text-white tracking-[-0.1px] text-[20px] font-normal">90%</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>


<div className='mt-20' id='roadmap'>
  <h1 className="text-white tracking-[-0.8px] text-[40px] font-medium mb-10">RoadMap</h1>
  <div className="flex items-center gap-[40px] pl-[56px] pr-[56px]">
  <div className="flex flex-row items-start gap-[80px] pt-10 pl-[80px]"> {/* Space between left and right sides */}
  {/* Left side: Button, heading, and tick points */}
  <div className="flex flex-col gap-[36px]">
    {/* Button with fixed width of 71px */}
    <button className="flex flex-row items-center justify-center h-[28px] w-[71px] bg-[#f7f7f7] text-[#333333] text-[12px] font-medium uppercase tracking-[0.19px] rounded-[4px] p-[12px]">
      PHASE 1
    </button>

    {/* Heading */}
    <h1 className="text-white tracking-[-0.8px] text-[40px] font-medium">
      Kicking Off
    </h1>

    {/* Tick points */}
    <div className="flex flex-col">
      {[
        "Launch of EthAi: Officially",
        "Development of Core AI Agents",
        "User Onboarding Campaign",
        "Community Engagement Initiatives"
      ].map((text, index) => (
        <div className="flex items-center mt-3" key={index}>
          <img src='https://i.ibb.co/1bgf72k/Image.png' alt='Task icon' className="mr-4" />
          <h1 className="text-[#efefe8] tracking-[-0.1px] text-[20px] font-normal">
            {text}
          </h1>
        </div>
      ))}
    </div>
  </div>

  {/* Right side: Image */}
  <div>
    <img 
      src='https://i.ibb.co/6J30Ww7/Container-4.png'
      alt="Visual representation of the project"
      className="w-[512px] h-[512px] max-w-[var(--width576)] opacity-100"
    />
  </div>
</div>



  </div>
  <div className="flex flex-row items-start gap-[80px] pt-10 pl-[80px] mt-10"> {/* Space between left and right sides */}
  {/* Left side: Image */}
  <div>
    <img 
      src='https://i.ibb.co/6J30Ww7/Container-4.png'
      alt="Visual representation of the project"
      className="w-[512px] h-[512px] max-w-[var(--width576)] opacity-100"
    />
  </div>

  {/* Right side: Button, heading, and tick points */}
  <div className="flex flex-col gap-[36px]">
    {/* Button with fixed width of 71px */}
    <button className="flex flex-row items-center justify-center h-[28px] w-[71px] bg-[#f7f7f7] text-[#333333] text-[12px] font-medium uppercase tracking-[0.19px] rounded-[4px] p-[12px]">
      PHASE2
    </button>

    {/* Heading */}
    <h1 className="text-white tracking-[-0.8px] text-[40px] font-medium">
    Bigger Insights
    </h1>

    {/* Tick points */}
    <div className="flex flex-col">
      {[
        "Introduction of Advanced AI Agents",
        "Strategic Partnerships",
        "User Interface Optimization",
        "Comprehensive Marketing Campaign"
      ].map((text, index) => (
        <div className="flex items-center mt-3" key={index}>
          <img src='https://i.ibb.co/1bgf72k/Image.png' alt='Task icon' className="mr-4" />
          <h1 className="text-[#efefe8] tracking-[-0.1px] text-[20px] font-normal">
            {text}
          </h1>
        </div>
      ))}
    </div>
  </div>
</div>

<div className="flex flex-row items-start gap-[80px] pt-20 pl-[80px] ml-20"> {/* Space between left and right sides */}
  
  {/* Left side: Button, heading, and tick points */}
  <div className="flex flex-col gap-[36px]">
    {/* Button with fixed width of 71px */}
    <button className="flex flex-row items-center justify-center h-[28px] w-[71px] bg-[#f7f7f7] text-[#333333] text-[12px] font-medium uppercase tracking-[0.19px] rounded-[4px] p-[12px]">
      PHASE3
    </button>

    {/* Heading */}
    <h1 className="text-white tracking-[-0.8px] text-[40px] font-medium">
    Full Power
    </h1>

    {/* Tick points */}
    <div className="flex flex-col">
      {[
        "Introduction of Enhanced Features",
        "API Integration for Data Access",
        "Launch of Community-Driven Initiatives",
        "Continuous Improvement and Updates"
      ].map((text, index) => (
        <div className="flex items-center mt-3" key={index}>
          <img src='https://i.ibb.co/1bgf72k/Image.png' alt='Task icon' className="mr-4" />
          <h1 className="text-[#efefe8] tracking-[-0.1px] text-[20px] font-normal">
            {text}
          </h1>
        </div>
      ))}
    </div>
  </div>

  {/* Right side: Image */}
  <div>
    <img 
      src="https://i.ibb.co/Jv2QDKv/Container-5.png"
      alt="Visual representation of the project"
      className="w-[512px] h-[512px] max-w-[var(--width576)] opacity-100"
    />
  </div>
</div>


</div>

</div>
<div className='w-[1200px] h-[551px] max-w-[var(--width1200)] p-[100px_108px_120px_141px] gap-[var(--itemspacing60)] opacity-100 flex justify-center'>
  <div className='w-[385px] h-[128px] p-[20px_0] gap-0 opacity-100'>
    <h1 className='text-white tracking[-0.8px] text-[40px] font-medium w-[82%] leading-[44px]'>Frequently Asked
Questions</h1>

  </div>
  <div className='w-[675px] h-[331px] gap-0 rounded-tl-[20px] rounded-br-[0px] rounded-bl-[0px] rounded-tr-[0px] opacity-100 mt-8 ml-20'>
    <h1 className='text-white ml-[26px] text-[16px] font-normal pb-5'>+    What is EthAi?</h1>
    <h1 className='text-white ml-[26px] text-[16px] font-normal pb-5'>+    Who can use EthAi?</h1>
    <h1 className='text-white ml-[26px] text-[16px] font-normal pb-5'>+    How does EthAi track smart money flow?</h1>
    <h1 className='text-white ml-[26px] text-[16px] font-normal pb-5'>+    How does ensure data security?</h1>

  </div>
</div>


<div className='flex items-center justify-center'>
<div className="w-[960px] h-[382px] bg-gradient-to-r from-[#1f3c5e] to-[#0e1b28] p-10 rounded-lg shadow-lg flex flex-col items-center text-center">
  <h1 className="text-3xl font-semibold text-white mb-4">Explore Our <span className="text-[#00bcd4]">dApp</span></h1>
  <p className="text-white text-lg mb-6">
    EthAI is an AI-powered dApp designed to help traders make smarter, data-driven decisions.
    By tracking smart money flows, monitoring key wallets, and providing real-time market insights,
    EthAI empowers users to stay ahead of trends. The platform offers intuitive AI features for asset 
    recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool 
    for both novice and experienced traders.
  </p>
  <button className="bg-[#00bcd4] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#00a0b1] transition duration-300">
    Open dApp
  </button>
</div>

</div>


</div>
<div className="flex flex-col items-center justify-between bg-[#0e1b28] p-4">
      <div className="text-center mb-4">
        <span className="text-white text-lg">EthAi</span>
      </div>
      <div className="flex items-center space-x-4 mb-4">
        <FaTelegram className="text-white" />
        <FaInstagram className="text-white" />
        <FaTimes className="text-white" /> {/* Using FaTimes */}
        <FaFacebook className="text-white" />
        <FaDiscord className="text-white" />
      </div>
      <div className="text-white text-center">
        <blockquote>
          "Designed for traders of today, just like you."
        </blockquote>
        <div className="flex items-center justify-center mt-2">
          <input
            type="email"
            placeholder="What's your work email?"
            className="p-2 rounded-md"
          />
          <button className="bg-[#00bcd4] text-white p-2 rounded-md ml-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
</div>
  );
}

export default App;