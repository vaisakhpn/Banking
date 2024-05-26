import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import ToatalBalanceBox from "@/components/ToatalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Vaisakh",
    lastName: "P N",
    email: "contact@gmail.com",
  };

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
      <RightSidebar
        user={loggedIn}
        transction={[]}
        banks={[{ currentBalance: 125.35 }, { currentBalance: 1255.35 }]}
      />
    </section>
  );
};

export default Home;
