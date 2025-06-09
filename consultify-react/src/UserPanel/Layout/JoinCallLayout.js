import Navbar from "../components/account_home/Navbar";
import Sidebar from "../components/account_home/Sidebar";

function JoinCallLayout({ children }) {
  return (
    <div>
      <div id="wrapper" className="user-panel">
        <Navbar />
        <section className="main_content_wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2">
                <Sidebar />
              </div>
              {children}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default JoinCallLayout;
{
  /* console.log(isShowChat, chatSocket, convoId) */
}
