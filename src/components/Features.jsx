import Privacy from "/privacy.svg";
import Uptime from "/99.svg";
import Chat from "/chat.svg";
function Features() {
  return (
    <div className="mt-52 w-screen p-0 relative flex-col ">
      <div className="w-1/3">
        <p className="text-5xl font-bold">
          Build on a robust and powerful platform
        </p>
        <p className="mt-6 text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius
          dapibus dui eget mattis. Nulla eu leo nec justo vulputate tincidunt.
        </p>

        <div className="py-10 flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <div className="bg-[#6639E3] rounded-lg p-2">
              <img src={Privacy} alt="Privacy Logo" className="h-6 w-6" />
            </div>
            <p className="text-lg">100% Private Data</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-[#6639E3] rounded-lg p-2">
              <img src={Uptime} alt="Privacy Logo" className="h-6 w-6" />
            </div>
            <p className="text-lg">99.99% Uptime guarantee</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-[#6639E3] rounded-lg p-2">
              <img src={Chat} alt="Privacy Logo" className="h-6 w-6" />
            </div>
            <p className="text-lg">24/7 Dedicated support</p>
          </div>
        </div>
      </div>

      <img
        src="/pc.jpg"
        alt="PC"
        className="absolute right-32 top-0 h-5/6 scale-150"
      />
    </div>
  );
}

export default Features;
