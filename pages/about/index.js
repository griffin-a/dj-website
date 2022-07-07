import InfoPanel from "../../components/InfoPanel";
import SkillsPanel from "../../components/SkillsPanel";

const DESC_1 =
  "Yeah G, otherwise known as Griffin Almquist, is a DJ who specializes in DJing \
for private events. He has experience DJing at venues of different shapes and sizes, and knows how \
to get the crowd moving, no matter how small or large. \
\
Well-versed and knowledgable about many different genres of music, Griffin is very adaptive and able \
to cater to any event's specific needs/tastes. \
\
He has around two years of experience in DJing, and has DJed for various different events. Check the \
events page for more information about the previous and upcoming events he has been at.  \
";

const DESC_2 =
  "Griffin is currently a final-year Computer Science student at the University of Auckland. \
He is available for freelance web development work in addition to DJ and other music gigs. Please inquire within if interested.";

export default function About() {
  const descriptions = [DESC_1, DESC_2];

  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="max-w-5xl pt-7 mx-auto">
          <h1 class="text-5xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
            About page
          </h1>
        </div>
        <section class="bg-gray-100">
          <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <InfoPanel
              title="Introducing Yeah G"
              descriptions={descriptions}
            />
            <SkillsPanel
              title="Genres I Am Experienced With"
              description="I am open to mixing pretty much anything, but there are some genres I am more familiar with than others.
              Please don't hesitate to contact me if you are curious about whether or not I can accommodate your musical taste. 
              Given enough time, I should be able to familiarize myself with a new genre if requested."
            />
          </div>
        </section>
      </section>
    </div>
  );
}
