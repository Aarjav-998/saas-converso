import React from 'react'
import {Button} from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {

    return (
      <main>
          <h1 className="text-2xl ">Popular Companions</h1>


          <section className="home-section">
              <CompanionCard
                  id={'123'}
                  name={'Neura the Brainy Expert'}
                  topic={'Neural Network of The Brain'}
                  subject={'science'}
                  duration={45}
                  color={"#ffda6e"}
                  bookmarked={false} />

              <CompanionCard
                  id={'456'}
                  name={'Countsy the Number Wizard'}
                  topic={' Derivatives & Integrals'}
                  subject={'Mathematics'}
                  duration={30}
                  color={"#e5d0ff"}
                  bookmarked={false} />

              <CompanionCard
                  id={'789'}
                  name={'Verba the Vocabulary Builder'}
                  topic={'English Literature'}
                  subject={'Language'}
                  duration={30}
                  color={"#BDE755"}
                  bookmarked={false} />
          </section>
          <section className='home-section'>
              <CompanionsList title={'Recently Completed Sessions'}
              companions={recentSessions}
              classNames="w-2/3 max-lg:w-full"
              />
              <CTA/>
          </section>

      </main>
  )
}

export default Page