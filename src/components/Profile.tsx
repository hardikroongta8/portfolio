export default function Profile() {
  return (
    <div className="px-10 md:px-32 grid items-center h-screen">
      <div>
        <div className="text-3xl font-semibold text-white font-nunito">
          <h1>Hey,</h1>
          <div className="h-1"></div>
          <h1>I'm Hardik</h1>
        </div>
        <div className="mt-5 text-xl text-gray-400 font-nunito">
          <p>I'm a final yearite at IIT Guwahati, majoring in</p>
          <p>Electronics & Communications Engineering.</p>
          <div className="h-3"></div>
          <p>My interests include app development,</p>
          <p>backend development, dev ops, and IoT.</p>
          <div className="h-3"></div>
          <p>Currently, I am leading the App Team at</p>
          <p>Students' Web Committee, IITG.</p>
        </div>
        <div className="text-2xl mt-5 font-semibold font-nunito text-white underline">
          <a href="/public/resume.pdf">
            <p>Get my resume</p>
          </a>
        </div>
      </div>
    </div>
  );
}