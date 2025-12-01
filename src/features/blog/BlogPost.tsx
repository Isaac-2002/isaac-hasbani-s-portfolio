import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Briefcase, FileText, Lightbulb, Server, Code, Layers, Users, TrendingUp, CheckCircle } from "lucide-react";
import { Layout } from "@/shared/layout/Layout";
import { Button } from "@/components/ui/button";
import dealImage from "@/assets/Deal.jpg";

interface BlogPostData {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}

const blogPostsData: Record<string, BlogPostData> = {
  "tech-shapes-ma-deals": {
    id: "tech-shapes-ma-deals",
    title: "How Tech Shapes M&A Deals: A Practical Guide",
    date: "Dec 1, 2024",
    category: "Tech Consulting",
    readTime: "5 min read",
    content: `
I recently wrapped up an interview process for a top-tier tech consulting firm's private equity practice. Honestly? I learned more about the intersection of tech and PE in those interviews than in months of reading. So here's a short post on how technology drives investment decisions and a simple framework you can use to prepare for interview cases.

## How Tech Consulting Firms Support M&A Deals

When a private equity investor is evaluating an acquisition, they almost always call in tech consultants to run a technology due diligence (tech DD). These engagements are fast (think 3–4 weeks) and laser-focused on one massive question: **Is technology going to accelerate the investment thesis, or drag it underwater?**

The stakes are high. PE firms are making significant bets that they can grow the company and exit at a profit. However, if the technology can't scale, or if the team is dysfunctional, the entire investment thesis falls apart.

Let's look at a classic scenario and break it down with a simple structure.

## The Scenario

A private equity fund is evaluating the acquisition of TaskFlow, a B2B SaaS offering lightweight project management and team collaboration (think Trello/Asana). The investor wants to grow the company by adding features and expanding internationally, but before they buy, they hire you to run a tech DD and tell them whether to move forward.

## How to Solve

A good way to solve this case is to break the assessment into five key pillars:

## 1. Infrastructure

**Why it matters:**

Infrastructure answers a simple question: can TaskFlow actually scale? If the platform can't handle more users, the growth thesis breaks before it even starts. On top of that, in a B2B environment, the infrastructure must meet the availability (percentage of time a system is operational and accessible to users) levels promised in Service Level Agreements (SLAs). SLAs define expected uptime and performance standards between the service provider and its clients. Ensuring the infrastructure can consistently meet these requirements is critical to avoid contractual penalties.

**What to assess:**

- **Cloud vs on-prem:** Modern cloud platforms (AWS, GCP, Azure) make it easy to scale and deploy across regions. On-prem servers tend to be slower, pricier, and more manual — not ideal if you're trying to ramp fast.
- **Availability levels:** For SaaS, 99.9% availability (about 8.7 hours of downtime per year) is the expected baseline. Anything below that risks SLA breaches and dissatisfied customers.

## 2. Software Architecture

**Why it matters:**

Architecture determines the pace of innovation and how easily TaskFlow can integrate with the broader ecosystem. If the architecture slows development, even small features take months instead of weeks. And if APIs are clunky or outdated, integrations become painful, which makes TaskFlow less sticky for customers.

**What to assess:**

- **Monolith vs microservices:** In a monolith, everything is bundled together, meaning changes in one area can cause ripple effects elsewhere. Microservices break the product into independent modules, allowing teams to ship faster and in parallel.
- **API design:** Well-documented REST APIs are the standard today: lighter, flexible, and integration-friendly. SOAP, while functional, tends to be rigid and harder for partners to work with. Strong API design is often the secret ingredient to ecosystem growth.

## 3. Tech Stack

**Why it matters:**

The tech stack affects development speed and cybersecurity risk. Legacy frameworks slow down delivery and make hiring harder and more expensive.

**What to assess:**

- **Frontend / backend / data layers:** Modern technologies (React, Node.js, PostgreSQL, etc.) are well-supported and come with deep talent pools. Older stacks (AngularJS, Classic ASP, Oracle 10g, etc.) are harder to maintain and often introduce avoidable vulnerabilities. Not exactly the foundation you want when scaling.

## 4. People

**Why it matters:**

Even with the perfect stack, slow shipping kills growth. How engineering teams are organized and how efficiently they execute will tell you whether the roadmap is realistic.

**What to assess:**

- **Team topology:** Cross-functional product squads move faster than centralized structures where all roads lead through one architecture or DevOps team.
- **DORA metrics:** Deployment frequency (how often code ships), lead time (idea to production), change failure rate (percentage of deployments causing failures), and mean time to recovery (how quickly issues are fixed) reveal team efficiency. High-performing teams deploy multiple times daily with low failure rates and fast recovery.

## 5. Financial Efficiency

**Why it matters:**

Ultimately, the PE thesis needs numbers to work. Two key indicators here are how engineering time is allocated (KTLO vs innovation) and whether margins scale as revenue grows. If most of engineering is spent just keeping the platform alive, the company can't realistically build the features required for expansion without adding a lot more headcount.

**What to assess:**

- **KTLO vs innovation split:** Best-in-class SaaS players dedicate roughly 70% to innovation and 30% to KTLO. If TaskFlow's ratio is reversed, expect a heavy investment period before the growth strategy can take off.
- **Gross margin:** COGS (especially hosting and infra) as a share of revenue reveals whether the business gets more profitable with scale — or just burns more cash with every customer added.

## Conclusion

This framework isn't the one and only way to approach a tech due diligence case, but it is a solid starting point that I've personally found useful. There are plenty of other case types too, from AI strategy to IT cost reduction or tech assessments for non-tech companies.

Maybe I'll cover some of those in another post. For now, if you're preparing for tech consulting interviews, especially those with a private equity angle, this structure should give you a clear, structured way to break the case down and communicate your findings confidently.

**Good luck!**
    `,
  },
  "ai-product-strategy": {
    id: "ai-product-strategy",
    title: "How AI is Reshaping Product Strategy",
    date: "Nov 15, 2024",
    category: "AI & Product",
    readTime: "5 min read",
    content: `
Artificial intelligence is no longer just a buzzword—it's fundamentally changing how we approach product development. In this post, I'll share some observations from my studies and personal projects on how AI is reshaping product strategy.

## The Shift in User Expectations

Users today expect personalized experiences. Generic, one-size-fits-all products are quickly becoming obsolete. AI enables us to create adaptive interfaces that learn and evolve with each user, delivering tailored experiences at scale.

## From Features to Intelligence

Traditional product development focused on building features. Now, the question isn't "what features should we add?" but "how can we make this product smarter?" The best products are those that anticipate user needs before they're explicitly stated.

## Data as a Product Pillar

Data has always been important, but AI elevates it to a core product pillar. The products that win will be those that can effectively collect, process, and learn from user data—while maintaining trust and privacy.

## Practical Implications

For product leaders, this means:
- Investing in data infrastructure early
- Building cross-functional teams with ML expertise
- Rethinking success metrics to include learning and adaptation
- Considering ethical implications of AI-driven decisions

## Looking Ahead

The integration of AI into product strategy is still in its early stages. Those who master this intersection will have a significant competitive advantage in the coming decade.
    `,
  },
  "data-driven-decisions": {
    id: "data-driven-decisions",
    title: "The Art of Data-Driven Decision Making",
    date: "Oct 28, 2024",
    category: "Analytics",
    readTime: "7 min read",
    content: `
Data-driven decision making sounds straightforward, but in practice, it's an art form that requires balancing quantitative insights with qualitative understanding.

## The Trap of Over-Quantification

One common mistake is trying to reduce everything to numbers. While metrics are powerful, they can't capture the full picture of user experience, team dynamics, or market sentiment.

## Building a Data Culture

Effective data-driven organizations don't just have dashboards—they have a culture of curiosity. Teams ask questions, challenge assumptions, and use data as a starting point for discussion, not an end point.

## The Right Questions Matter

Before diving into data, ask yourself: What decision am I trying to make? What would change my mind? The best analysts start with clear hypotheses rather than fishing for insights.

## Combining Data with Intuition

The most effective leaders I've studied use data to inform intuition, not replace it. They understand when to trust the numbers and when to listen to their gut—usually developed through years of pattern recognition.

## Practical Framework

My approach to data-driven decisions:
1. Define the decision clearly
2. Identify what data would be relevant
3. Gather and analyze the data
4. Consider what the data doesn't capture
5. Make a decision and document the reasoning
6. Review outcomes and adjust

This iterative approach helps build both analytical skills and intuition over time.
    `,
  },
  "lbs-journey": {
    id: "lbs-journey",
    title: "My Journey to London Business School",
    date: "Sep 10, 2024",
    category: "Personal",
    readTime: "6 min read",
    content: `
Joining London Business School for my MSc in Analytics & Management has been one of the most transformative decisions of my life. Here's how I got here and what I've learned so far.

## The Decision

After completing my undergraduate studies, I knew I wanted to deepen my expertise in analytics while gaining exposure to management and strategy. LBS offered the perfect blend.

## The Application Process

The application was rigorous but fair. Key elements included:
- Strong academic transcript
- GMAT score
- Essays that told my unique story
- Interviews that tested both analytical and interpersonal skills

## First Impressions

The diversity of my cohort continues to amaze me. Students from over 40 countries, backgrounds ranging from consulting to engineering to entrepreneurship. Every conversation is a learning opportunity.

## Key Learnings So Far

A few months in, here's what stands out:
- The intersection of technology and business is where the most interesting problems live
- Networks matter—but genuine relationships matter more than transactional networking
- London as a city offers unparalleled access to global companies and talent

## Advice for Prospective Students

If you're considering LBS or a similar program:
- Be authentic in your application
- Know why you want this specific program
- Prepare to be challenged and transformed
- Make the most of the location and network

The journey is just beginning, but I'm grateful every day for this opportunity.
    `,
  },
  "cloud-resume-learnings": {
    id: "cloud-resume-learnings",
    title: "What I Learned Building the AWS Cloud Resume",
    date: "Aug 22, 2024",
    category: "Tech",
    readTime: "8 min read",
    content: `
The AWS Cloud Resume Challenge pushed me to learn more about cloud architecture in a few weeks than I had in months of theoretical study. Here are my key takeaways.

## The Challenge Structure

For those unfamiliar, the challenge involves building a resume website using AWS services: S3 for hosting, CloudFront for CDN, Lambda for serverless compute, DynamoDB for storage, and more.

## Technical Learnings

**Infrastructure as Code**: Using Terraform to manage AWS resources was a game-changer. The ability to version control infrastructure and reproduce environments is incredibly powerful.

**Serverless Architecture**: Lambda functions changed my mental model of how to build applications. Thinking in terms of events and functions rather than servers opens new possibilities.

**CI/CD**: Automating deployments with GitHub Actions taught me the value of continuous integration. Catching errors early and deploying with confidence is essential.

## Soft Skills Developed

Beyond technical skills, the challenge developed:
- Problem-solving persistence (things break, a lot)
- Documentation habits
- The ability to learn from community resources

## What I'd Do Differently

If I were starting again:
- Spend more time on architecture planning upfront
- Implement monitoring and logging from day one
- Write more tests earlier in the process

## Recommendation

For anyone looking to break into cloud computing, I highly recommend this challenge. It's practical, portfolio-worthy, and teaches skills that are immediately applicable in the industry.
    `,
  },
};

// Helper function to parse inline bold text
const parseBoldText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="text-white font-bold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

// Helper function to get icon and color for section titles
const getSectionIcon = (title: string) => {
  const titleLower = title.toLowerCase();

  if (titleLower.includes('tech consulting') || titleLower.includes('m&a deals')) {
    return { Icon: Briefcase, color: 'text-blue-500' };
  }
  if (titleLower.includes('scenario')) {
    return { Icon: FileText, color: 'text-purple-500' };
  }
  if (titleLower.includes('how to solve')) {
    return { Icon: Lightbulb, color: 'text-yellow-500' };
  }
  if (titleLower.includes('infrastructure')) {
    return { Icon: Server, color: 'text-green-500' };
  }
  if (titleLower.includes('architecture')) {
    return { Icon: Code, color: 'text-cyan-500' };
  }
  if (titleLower.includes('tech stack')) {
    return { Icon: Layers, color: 'text-indigo-500' };
  }
  if (titleLower.includes('people')) {
    return { Icon: Users, color: 'text-pink-500' };
  }
  if (titleLower.includes('financial')) {
    return { Icon: TrendingUp, color: 'text-emerald-500' };
  }
  if (titleLower.includes('conclusion')) {
    return { Icon: CheckCircle, color: 'text-orange-500' };
  }

  return null;
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPostsData[id] : null;

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 lg:px-8">
          <h1 className="text-2xl font-bold">Post not found</h1>
          <Button variant="outline" className="mt-4" asChild>
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative border-b border-border overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${dealImage})` }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />

        <div className="relative z-10 container mx-auto px-4 py-12 lg:px-8 min-h-[60vh] flex flex-col justify-between">
          <Button variant="ghost" className="mb-6 w-fit" asChild>
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl pb-12"
          >
            <span className="rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
              {post.category}
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-invert max-w-3xl mx-auto"
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {post.content.split('\n').map((line, i) => {
                if (line.startsWith('## ')) {
                  const titleText = line.replace('## ', '');
                  const iconData = getSectionIcon(titleText);

                  return (
                    <h2 key={i} className="text-2xl font-bold text-foreground mt-10 mb-4 flex items-center gap-3">
                      {iconData && <iconData.Icon className={`h-7 w-7 ${iconData.color}`} />}
                      {parseBoldText(titleText)}
                    </h2>
                  );
                }
                if (line.startsWith('**') && line.endsWith('**') && line.indexOf('**', 2) === line.length - 2) {
                  return <p key={i} className="font-bold text-white">{line.slice(2, -2)}</p>;
                }
                if (line.startsWith('- ')) {
                  return <li key={i} className="ml-4">{parseBoldText(line.replace('- ', ''))}</li>;
                }
                if (line.trim()) {
                  return <p key={i}>{parseBoldText(line)}</p>;
                }
                return null;
              })}
            </div>
          </motion.article>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
