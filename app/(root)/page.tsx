import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {
 const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting" 
            title="Welcome" 
            user={loggedIn?.name || 'Guest'} 
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1500.65}
          />
        </header>

        Recent Transactions
      </div>

      <RightSidebar 
       user={loggedIn} 
       transactions={[]}
       banks={[{ currentBalance: 123.52 }, { currentBalance: 428.50 }]}
      />
    </section>
  )
}

export default Home                                                         