'use client'

import React, {useState} from 'react';
import Image from 'next/image';
import Reveal from '../../components/utils/Reveal';

const highlights = [
  { src: '/1.jpg' },
  { src: '/2.JPG' },
  { src: '/7.JPG' },
];

const eventSections = [
  {
    title: "ANUISA Expert Series",
    items: [
      {
        title: "How to Think Like a Consultant",
        youtubeId: "4Nqj9-QdfrY",
        description: "This first ANUISA Expert Series seminar, held via Zoom, features Ririn, Director of ESG at a Big Four consulting firm in Indonesia. The session unpacks what it means to “think like a consultant”—why consulting skills like critical thinking, structured problem-solving, and change management matter not only for consulting careers but also across industries and everyday work.\n Ririn reflects on her 20+ years in professional practice, from starting as a financial auditor in the post-Enron era to transitioning into consulting across financial crime, risk management, and ESG (environmental, social, governance). She explains how shifting from “auditor mindset” (checking compliance) to “consultant mindset” (helping clients solve problems) shaped her career, and shares real-world cases from corporate investigations to sustainability strategy.\n For students and early professionals, Ririn stresses the value of critical thinking, communication skills, and adaptability alongside technical expertise. She also offers candid advice on building resilience in demanding consulting environments and on positioning oneself in fields like ESG where multidisciplinary teams (from accountants to engineers to psychologists) collaborate. The session doubles as both a career primer and a candid look at consulting life in Indonesia and beyond."
      },
      {
        title: "How to Sustain Stakeholder Support ",
        youtubeId: "tW0G9HaTd8U",
        description: "This second ANUISA Expert Series seminar features Alicia Zainal, Senior Stakeholder Relations Expert at Pertamina, with additional insights from Evalina Sitepu, VP Business Risk Management at Patra Niaga. The session explores how organizations can sustain trust and support from diverse stakeholders—from employees and regulators to communities and international partners.\n Drawing on PERTAMINA`s vast operations, Alicia explains practical tools like the power-interest matrix and salience model, showing how to prioritize relationships and communicate effectively. She highlights real-world practices: conducting research, tailoring messages, engaging through site visits and social media, and maintaining credibility under complex and noisy conditions.\n For students, the seminar offers key insights on building critical communication skills, stakeholder mapping, and crisis preparedness—transferable to careers in consulting, public affairs, policy, and corporate governance. Alicia and Eva also underline the future demand for professionals who can navigate sustainability, ESG, and cross-sector collaboration. The takeaway: mastering stakeholder engagement is not only vital for today`s organizations but also a promising career pathway for young leaders shaping Indonesia`s and the region`s future.\n For students, the seminar offers key insights on building critical communication skills, stakeholder mapping, and crisis preparedness—transferable to careers in consulting, public affairs, policy, and corporate governance. Alicia and Eva also underline the future demand for professionals who can navigate sustainability, ESG, and cross-sector collaboration. The takeaway: mastering stakeholder engagement is not only vital for today`s organizations but also a promising career pathway for young leaders shaping Indonesia`s and the region`s future."
      },
      {
        title: "How to Navigate a Competitive Tech Environment",
        youtubeId: "-eGKQ3UzuQQ",
        description: "This third ANUISA Expert Series features Denny Galan, Country Head for Android Platforms & Ecosystem at Google Indonesia. Drawing on 28+ years across Motorola, Nokia, BlackBerry, XL Axiata, Samsung, Vivo, and Google, Denny traces the mobile revolution in Indonesia and why smartphones became the nation`s internet on-ramp—fueling digital economy growth and today`s AI wave. He unpacks how to operate in fast, unstable markets: anchor on user needs, iterate quickly (“fail fast, iterate”), and be adaptive when strategies expire. From product marketing (positioning, pricing, forecasting) to business development (building win-win partnerships among telcos, OEMs, financiers, channels, and integrators), he shows how ecosystem plays unlock affordability and access. For students: cultivate continuous learning, go the extra mile, and get comfortable with ambiguity—growth doesn`t have to be vertical; it can be horizontal. Build fluency in user research, structured problem-solving, and cross-functional collaboration; these skills translate across tech, policy, and business roles. With AI adoption accelerating (and new student access programs emerging), those who can map user problems, partner across ecosystems, and ship iterative solutions will find strong career prospects in Indonesia`s expanding tech landscape."
      },
      {
        title: "How to Build a Research Career in a International Policy Think Tank",
        youtubeId: "#",
        description: "This fourth ANUISA Expert Series features Gatra Priyandita, Senior Analyst at the Australian Strategic Policy Institute (ASPI), in an in-person seminar at ANU. The conversation explores Gatra`s academic and professional journey—from his student days at ANU to his current role in one of Australia`s leading international policy think tanks. The discussion unpacks what it means to work as a researcher in a think tank: daily activities, differences between the Indonesian and Australian policy research environments, and the kinds of projects that shape public debate on cyber, technology, and security. Gatra highlights the importance of not only producing rigorous analysis but also navigating the highly social side of the research world—networking, publishing, and building a professional reputation across borders. For Indonesian students, the session provides practical insights on developing the right skills, portfolios, and networks to enter and thrive in policy research. Gatra shares tips on how to stand out as an Indonesian researcher abroad, from leveraging unique perspectives to cultivating adaptability and credibility. The seminar doubles as both a behind-the-scenes look at think tank life and a guide for students aspiring to careers in research, policy, and international affairs."
      },
    ]
  },
  {
    title: "ANUISA Roundtable Talks",
    items: [
      {
        title: "Freedom of Expression in the #IndonesiaGelap Era",
        youtubeId: "zIsJuvmKcLs",
        description: "The podcast episode with Sita Dewi (PhD candidate, Coral Bell School of Asia Pacific Affairs) is part of ANUISA`s collaboration with Indonesian Synergy under the theme Indonesia Gelap. Hosted by Nadir Yudoputra with co-host Kathleen Rachel, the ~60-minute video podcast explores the rise of the #IndonesiaGelap movement, triggered by budget cuts under the Prabowo–Gibran administration and the passage of the revised military law expanding TNI`s civilian role. The conversation situates these developments in Indonesia`s broader democratic backsliding: shrinking press freedom, increasing repression of protests, and intimidation against journalists. Sita Dewi brings both academic and journalistic perspectives, highlighting the risks of authoritarian revival and the challenges for civil society. The discussion also reflects on the role of Indonesian students abroad, emphasizing their responsibility and privilege to engage critically, raise awareness, and support movements back home. Framed as the inaugural XStream Talks (Now ANUISA roundtable talks) episode, the podcast combines research-driven insights with diaspora voices, aiming to spotlight press freedom, democratic erosion, and the significance of civic participation both within Indonesia and across its global student community."
      },
      {
        title: "The Discourse of Trauma and The Ethics of Remembering History",
        youtubeId: "35yW7yr-vQc",
        description: "The podcast episode “Erased Wounds: The Discourse of Trauma and the Ethics of Remembering History” with Prof. Hans Pols (University of Sydney) reflects on the silencing of sexual violence during the May 1998 riots, especially the mass rapes targeting Chinese-Indonesian women. Hosted by Kathleen Rachel with Nadir Yudoputra as co-host, the 45-minute conversation situates these atrocities within Indonesia`s ongoing struggles with historical denial and selective memory. Pols stresses that while the riots marked a turning point in the nation`s democratic transition, the trauma of survivors was quickly muted, leaving their stories marginalized and often erased from official narratives. A key focus of the episode is how trauma first entered Indonesian public discourse not through psychologists or psychiatrists, but through activists, women`s groups, and survivors themselves. Pols explains how collective trauma differs from individual trauma, and how post-authoritarian societies often suppress painful histories to protect entrenched power. The discussion also connects to present-day controversies, such as the state`s dismissal of the 1998 mass rapes as mere “rumors,” illustrating the dangers of institutional amnesia and revisionism. These acts of denial not only dishonor survivors but also weaken democratic accountability. The episode ultimately frames remembering as a political act, a responsibility that extends beyond survivors to society at large. Pols emphasizes the ethical role of schools, media, and government in acknowledging traumatic histories, while also highlighting the unique responsibility of Indonesian scholars and students, including those abroad, to challenge erasure. By keeping these memories alive, the diaspora and academic communities can resist silences that protect power rather than people, ensuring that the past continues to inform and strengthen Indonesia`s democratic future."
      },
      {
        title: "Was Majapahit an Empire? Rethinking the Nationalist Narrative",
        youtubeId: "tRGa_X42uRY",
        description: "The episode “Was Majapahit an Empire? Rethinking the Nationalist Narrative” with Dr. Wayan Jarrah Sastrawan (School of Culture, History & Language, ANU) interrogates one of the most enduring myths in Indonesian history: Majapahit as a unified maritime empire. Hosted by Nadir Yudoputra and Kathleen Rachel, the 1-hour podcast explores how Majapahit`s image has been elevated in textbooks, symbols, and political rhetoric as a “golden age” of unity and greatness. Jarrah argues that this narrative tells us more about modern nationalism than about 14th-century Java, pointing instead to Southeast Asian models like the mandala, where power rested on ritual authority, fluid boundaries, and symbolic hegemony rather than fixed territorial sovereignty. The discussion revisits the actual sources: the Deśavarṇana (Nagarakretagama), inscriptions, and Chinese records. Jarrah shows how these texts reveal Majapahit`s influence was uneven and situational, more about recognition and diplomacy than centralized rule. The conversation also traces how Dutch colonial scholars such as Brandes and Krom helped codify the Majapahit “empire” myth, which was later adopted by the New Order to justify centralization and Jakarta-centric statehood. Beyond critique, the episode asks what happens when national identity is built on historical myths. Jarrah and the hosts reflect on whether critical history can still resonate with national pride and how Indonesians, especially students and scholars, might embrace a more nuanced understanding of the past. The takeaway is that rethinking Majapahit does not diminish pride; rather, it enriches it by grounding identity in historical complexity rather than simplistic legends."
      },
      {
        title: "Colonisation, Reform, and Reconciliation: Lessons for International Students in Australia",
        youtubeId: "#",
        description: "The podcast episode “Colonisation, Reform, and Reconciliation: Lessons for International Students in Australia” with Professor Will Sanders (Centre for Indigenous Policy Research, ANU) explores how Australia has grappled with its colonial legacy and the rights of Aboriginal and Torres Strait Islander peoples. Hosted by Nadir Yudoputra with co-host Kathleen Rachel, the ~60-minute conversation introduces international audiences to the First Peoples of Australia, their history of dispossession under the doctrine of terra nullius, and the enduring impacts of colonisation. The discussion traces the evolution of Indigenous policy, from early protection and assimilation to the milestones of self-determination: the 1967 Referendum, the 1992 Mabo decision affirming native title, and the 2008 National Apology. Sanders highlights the uneven institutionalisation of Indigenous rights, noting how land rights enjoy stronger legal protections, while representative bodies remain fragile and vulnerable to political shifts, most recently underscored by the failed 2023 Voice to Parliament referendum. A central theme is reconciliation, which Sanders frames as a “journey without end”: an ongoing societal process of reckoning, recognition, and relationship-building that requires more than symbolic gestures. For international students, the episode offers ways to engage respectfully with Indigenous issues, underscoring the importance of awareness, solidarity, and critical reflection in shaping a more inclusive Australia."
      },
      {
        title: "Indonesia at a Crossroads: Reformasi, Impunity, and Democratic Regression",
        youtubeId: "#",
        description: "The podcast episode “Indonesia at a Crossroads: Reformasi, Impunity, and Democratic Regression” with Professor Edward Aspinall (Coral Bell School of Asia Pacific Affairs, ANU) closes the ANUISA Roundtable Talks under the current cabinet. Hosted by Nadir Yudoputra with co-host Kathleen Rachel, the ~60-minute conversation situates Indonesia`s present turmoil, mass protests, parliamentary scandals, the weakening of anti-corruption institutions, and debates on the military`s expanding role, within the longer trajectory of post-Suharto politics. Aspinall, one of the foremost scholars of Indonesian democracy, reflects on how the legacies of the New Order, impunity, elite collusion, and KKN, continue to shape institutions nearly three decades into Reformasi. Drawing on his work on elections, clientelism, and democratic resilience, he explains why corruption and authoritarian tendencies persist, how civil–military relations remain unresolved, and why public discontent has re-emerged so forcefully today. The discussion also probes the paradox of Indonesian democracy: while citizens demand accountability, many tolerate authoritarian practices in exchange for stability or economic gain. For Indonesian students abroad, Aspinall highlights both the responsibility and opportunity to engage critically with these dynamics. As the capstone of the series, the episode leaves a lasting reflection on democracy`s fragility and the role of scholarship, activism, and the diaspora in sustaining it."
      },
    ]
  },
  {
    title: "ANUISA Alumni Life",
    items: [
      {
        title: "Kalau Penasaran Jangan Diseriusin, Nanti Jadi PhD: 6 Tahun di ANU",
        youtubeId: "aWHU-YqxZBg",
        description: "This episode of ANUISA Alumni Life features Muhammad Hali Primadia, a recent PhD in Public Policy from ANU`s Crawford School and now a Visiting Research Fellow at the Centre for Deliberative Democracy & Global Governance (University of Canberra). Hosted by Hanif and Intan, the ~1-hour conversation follows Hali`s 6+ years in Canberra—his shift from a communications/PR bureaucrat to a policy researcher—blending interests in policy communication and higher-education governance while navigating Indonesia`s research culture and incentive structures. Hali reflects on leading PPI ACT during the COVID years—managing conflict, taking clear positions, and building collaborations—alongside the realities of work–family balance in a small city. He unpacks how field constraints, institutional incentives, and personal values shape choices across public service, academia, and applied research. For Indonesian students, Hali offers practical advice: do honest self-assessment, manage your bandwidth, and say yes to the right opportunities. Signature takeaway: “Don`t over-serious your curiosity—next thing you know, you`re doing a PhD.” The episode is a grounded guide for those eyeing postgraduate study, academic careers, or community leadership in Australia."
      },
      {
        title: "Dari Pesantren ke PhD: Bongkar Serunya Riset Lapangan",
        youtubeId: "ydxaVEo3or8",
        description: "This episode of ANUISA Alumni Life features Nava Nuraniyah, PhD candidate in International Political and Strategic Studies (ANU) and now Postdoctoral Fellow at Macquarie University, Sydney. Hosted by Hanif and Intan, the ~1-hour conversation traces Nava`s journey from growing up in a pesantren in Yogyakarta to becoming an international researcher on conflict, extremism, and political Islam. She reflects on her academic path (HI at UMY, dual master`s in IR and Diplomacy at ANU), seven years of field research at institutions like RSIS Singapore and Institute for Policy Analysis of Conflict (IPAC), and her current work on disinformation in the Indo-Pacific. Nava shares the realities of field-based research: interviewing rebel groups, navigating risks, and balancing ethics with credibility. She highlights Indonesia`s unique post-Reformasi transparency, which provides rich data for terrorism and conflict studies, while comparing it to more restricted contexts like Malaysia or the Philippines. She also discusses challenges as a young female researcher—managing credibility, safety, and resilience—while keeping her passion at the center of her work. For Indonesian students, Nava offers grounded advice: follow your passion but learn to frame research for relevance, seize opportunities early (apply before graduation), and “shop for ideas” through seminars, writing op-eds, and engaging beyond journals to maximize policy impact. The episode shows how personal background, intellectual curiosity, and persistence can shape a meaningful career bridging academia, policy, and public discourse."
      },
      {
        title: "Behind the Embassy Doors: Inspiring Stories from Dr. Siswo Pramono & Dr. Marsia Pramono",
        youtubeId: "#",
        description: "This special episode of ANUISA Alumni Life features His Excellency Dr. Siswo Pramono, Ambassador of Indonesia to Australia and Vanuatu, together with Dr. Marsia Gustiananda Pramono, Associate Professor of Biomedicine at I3L. Hosted by Hanif and Intan, the ~1-hour conversation traces their journeys from student life at ANU—Dr. Siswo in Political Science and Dr. Marsia in Molecular Biology and Biochemistry—to building impactful careers in diplomacy and academia. Their story reflects how personal experiences, higher education, and shared resilience shaped them into a power couple bridging Indonesia and the world. The discussion dives into key moments from their time at ANU, how those experiences opened professional doors, and how they supported one another across continents and disciplines. Dr. Siswo shares milestones from his diplomatic postings in Europe and Canberra, including recent dynamics in Indonesia–Australia relations, while Dr. Marsia reflects on her academic path, balancing research, teaching, and family life. Together, they highlight the importance of adaptability, cross-disciplinary thinking, and service to society. For Indonesian students, the episode offers valuable takeaways: embrace continuous learning, nurture both vertical and horizontal growth, and develop soft skills like communication, empathy, and resilience. The Ambassadors` insights show how alumni can make a difference not only in policy and science but also in fostering stronger ties between nations. It is both a reflection on personal journeys and an inspiring call for young people to pursue careers with purpose and impact."
      },
    ]
  }
];

const VideoItem = ({ title, youtubeId, description, eventLink }: { title: string; youtubeId?: string; description: string; eventLink?: string }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [imageError, setImageError] = useState(false);
  const thumbnailUrl = youtubeId ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` : null;
  const itemUrl = youtubeId ? `https://www.youtube.com/watch?v=${youtubeId}` : eventLink || '#';
  
  // Truncate description to approximately 2 lines (around 120 characters)
  const truncatedDescription = description.length > 120 
    ? description.substring(0, 120) + "..." 
    : description;

  // Show placeholder if no youtubeId or if image failed to load
  const showPlaceholder = !youtubeId || imageError;

  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 mb-8 p-6 rounded-lg bg-gray-800 border border-gray-700 hover:border-[#BF872B] transition-all duration-300">
        <div className="flex-shrink-0">
          <a 
            href={itemUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative group"
          >
            <div className="relative w-full md:w-60 h-36 rounded-lg overflow-hidden">
              {showPlaceholder ? (
                <div className="w-full h-full bg-gradient-to-br from-[#BF872B] to-yellow-600 flex flex-col items-center justify-center p-4">
                  <div className="bg-white bg-opacity-20 rounded-full p-3 mb-2">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-medium text-center">
                    ANUISA EVENT
                  </span>
                </div>
              ) : (
                <Image
                  src={thumbnailUrl!}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={() => setImageError(true)}
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#BF872B] bg-opacity-90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {youtubeId && !imageError ? (
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-semibold text-white mb-3 hover:text-[#BF872B] transition-colors duration-300">
            <a href={itemUrl} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h4>
          <p className="text-gray-400 leading-relaxed mb-3">
            {truncatedDescription}
          </p>
          {description.length > 120 && (
            <button
              onClick={() => setShowFullDescription(true)}
              className="text-[#BF872B] hover:text-yellow-400 text-sm font-medium transition-colors duration-300 underline"
            >
              Read More
            </button>
          )}
        </div>
      </div>

      {/* Popup Modal */}
      {showFullDescription && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg max-w-3xl max-h-[80vh] overflow-y-auto border border-gray-700">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white pr-4">
                  {title}
                </h3>
                <button
                  onClick={() => setShowFullDescription(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl font-bold flex-shrink-0"
                >
                  ×
                </button>
              </div>
              <div className="text-gray-300 leading-relaxed mb-6">
                {description}
              </div>
              <div className="flex gap-4">
                <a
                  href={itemUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#BF872B] hover:bg-yellow-600 text-white px-6 py-2 rounded-lg transition-colors duration-300 font-medium"
                >
                  {youtubeId && !imageError ? 'Watch Video' : 'View Event'}
                </a>
                <button
                  onClick={() => setShowFullDescription(false)}
                  className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-lg transition-colors duration-300 font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const EventSection = ({ title, items }: { title: string; items: any[] }) => {
  return (
    <Reveal>
      <div className="mb-16 mt-16">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">
          <span className="text-[#BF872B]">{title.split(' ')[0]}</span>{' '}
          {title.split(' ').slice(1).join(' ')}
        </h3>
        <div className="max-w-4xl mx-auto">
          {items.map((item, index) => (
            <VideoItem
              key={index}
              title={item.title}
              youtubeId={item.youtubeId}
              description={item.description}
              eventLink={item.eventLink}
            />
          ))}
        </div>
      </div>
    </Reveal>
  );
};

const Highlights = () => {
  return (
    <section className="mb-0 py-20 px-10 bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      <div className="w-full mx-auto">
        <Reveal>
          <h2 className="text-4xl font-extrabold text-white mb-6 text-center">
            <span className="text-[#BF872B] font-bold">ANUISA</span> Highlights
          </h2>
          <p className="text-gray-400 text-lg text-center max-w-xl mx-auto mb-10">
            A glimpse into our most memorable moments at ANUISA events.
          </p>
        </Reveal>

        <Reveal>
          <div className="relative overflow-hidden p-10 rounded-lg bg-gray-800 border border-gray-700">
            <div
                className="slider"
                style={
                    {
                    "--height": "300px",
                    "--width": "500px",
                    "--quantity": highlights.length * 2,
                    } as React.CSSProperties
                }
                >
                <div className="list">
                    {highlights.concat(highlights).map((item, index) => (
                    <div
                        className="item flex items-center justify-center"
                        key={index}
                        style={{
                        "--position": index + 1,
                        } as React.CSSProperties & Record<string, string | number>}
                    >
                        <Image
                          src={item.src}
                          alt={`Highlight ${index + 1}`}
                          className="rounded-xl object-cover w-full h-full"
                          width={500}
                          height={300}
                          priority
                        />
                    </div>
                    ))}
                </div>
            </div>
          </div>
        </Reveal>
        {/* Event sections */}
        {eventSections.map((section, index) => (
          <EventSection
            key={index}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>
      
      

      {/* CSS slider styles */}
      <style>{`
        .slider {
          width: 100%;
          height: var(--height);
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
        }

        .slider .list {
          display: flex;
          min-width: calc(var(--width) * var(--quantity));
          position: relative;
        }

        .slider .item {
          width: var(--width);
          height: var(--height);
          position: absolute;
          left: 100%;
          animation: autoRun 25s linear infinite;
          animation-delay: calc((25s / var(--quantity)) * (var(--position) - 1) - 25s) !important;
        }

        @keyframes autoRun {
          from {
            left: 100%;
          }
          to {
            left: calc(var(--width) * -1);
          }
        }

        .slider:hover .item {
          animation-play-state: paused !important;
          filter: grayscale(1);
        }

        .slider .item:hover {
          filter: grayscale(0);
        }
      `}</style>
    </section>
  );
};

export default Highlights;
