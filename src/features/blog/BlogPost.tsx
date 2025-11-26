import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Layout } from "@/shared/layout/Layout";
import { Button } from "@/components/ui/button";

interface BlogPostData {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}

const blogPostsData: Record<string, BlogPostData> = {
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
      {/* Header */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-12 lg:px-8">
          <Button variant="ghost" className="mb-6" asChild>
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {post.category}
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
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

      {/* Featured Image placeholder */}
      <section className="border-b border-border bg-card/30">
        <div className="container mx-auto px-4 py-8 lg:px-8">
          <div className="aspect-video max-w-4xl mx-auto rounded-xl bg-secondary border border-border flex items-center justify-center">
            <p className="text-muted-foreground">Featured image placeholder</p>
          </div>
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
                  return <h2 key={i} className="text-2xl font-bold text-foreground mt-10 mb-4">{line.replace('## ', '')}</h2>;
                }
                if (line.startsWith('**') && line.endsWith('**')) {
                  return <p key={i} className="font-semibold text-foreground">{line.replace(/\*\*/g, '')}</p>;
                }
                if (line.startsWith('- ')) {
                  return <li key={i} className="ml-4">{line.replace('- ', '')}</li>;
                }
                if (line.trim()) {
                  return <p key={i}>{line}</p>;
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
