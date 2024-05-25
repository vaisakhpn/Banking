import HeaderBox from "@/components/HeaderBox";
import ToatalBalanceBox from "@/components/ToatalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Vaisakh" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
          <ToatalBalanceBox
          accounts={{}}
          totalBanks={1}
          totalCurrentBalance={1250.35}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
