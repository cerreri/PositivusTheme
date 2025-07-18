import { motion } from "framer-motion";
import AvatarSubsection from "./subsections/AvatarSubsection";
import BlogBlock from "../../../../components/blogBlock/BlogBlock";
import BlogCards from "./subsections/staticTextSubsection/BlogCards";
import EnumTextCard from "./subsections/staticTextSubsection/EnumTextCard";

export default function ContentSection() {
    return (
        <section className="w-full h-full flex flex-col px-[7%] gap-20 items-center overflow-hidden">
            <div className="w-full h-full flex flex-col gap-10 items-center">
                <AvatarSubsection />
                <div className="flex flex-col items-start gap-15 xl:w-4/5 w-full">
                    <motion.span className="space-grotesk-500 text-[clamp(16px,_2vw,_18px)] leading-9"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{delay: 0.3, ease: "easeInOut"}}
                        viewport={{ once: true }}
                    >
                        In the ever-evolving digital landscape, businesses are faced with an important 
                        question: should they invest in pay-per-click (PPC) advertising or focus on organic 
                        marketing strategies? While both approaches have their merits, choosing the right 
                        one depends on your goals, budget, and timeline. Let's dive into the strengths, 
                        challenges, and real-world applications of PPC and organic marketing to help you 
                        make an informed decision.
                    </motion.span>

                    <BlogBlock 
                        title="The Challenge of Standing Out Online"
                        text="Every day, millions of businesses compete for visibility online, making it increasingly 
                            difficult to capture the attention of potential customers. Organic search results are highly 
                            sought after, but earning a top spot on Google takes time and consistent effort. Meanwhile, 
                            PPC ads promise instant visibility but can quickly drain your budget if not executed effectively."
                        subtext="For small businesses with limited resources, this dilemma can feel like an impossible balancing act. 
                            Do you play the long game with organic strategies or opt for quick wins with PPC?"
                    />
                    <BlogBlock 
                        title="Comparing PPC and Organic Marketing"
                        text="Pay-per-click (PPC) and organic marketing each offer distinct advantages and challenges, 
                            making them effective for different business needs. PPC is designed to deliver immediate 
                            results by securing top placements on search engines or social media platforms, providing 
                            businesses with instant, targeted traffic. It allows for precise targeting based on factors 
                            like demographics, interests, and location, offering flexibility to start small and scale 
                            as needed. However, PPC can become expensive, particularly in competitive industries, and 
                            its results are short-lived since traffic stops when the campaign ends."
                        subtext="In contrast, organic marketing focuses on building a strong, sustainable presence through 
                            strategies like search engine optimization (SEO) and content creation. This approach builds 
                            trust and credibility over time, delivering consistent results without the need for ongoing ad spends. 
                            While results can take longer to materialize and are less immediate than PPC, organic 
                            marketing provides long-term benefits that make it a valuable strategy for sustained growth."
                    />
                    <BlogBlock 
                        title="Striking the Right Balance"
                        text="PPC and organic marketing aren't rivals—they're teammates. The best strategies 
                            combine both to create a holistic approach to growth,"
                        subtext="For instance, a business might use PPC to generate quick traffic for a 
                            new product launch while building long-term organic authority through SEO 
                            and blogging. Combining these strategies ensures you're reaching your 
                            audience now while laying the groundwork for future success."
                        special="PPC and organic marketing aren't rivals—they're teammates. The best strategies 
                            combine both to create a holistic approach to growth, says a digital marketing expert."
                    />
                    <BlogCards />
                    <BlogBlock 
                        title="Real-World Examples"
                        text="PPC and organic marketing have proven effective in different scenarios, 
                            and real-world examples highlight their impact. A local restaurant, for 
                            instance, leveraged Google Ads to target customers searching for a romantic 
                            evening meal, which led to a notable 120% increase in reservation rates 
                            within just two weeks. Similarly, a B2B SaaS company focused on organic 
                            marketing by investing in SEO and blog content. This strategic approach 
                            helped them rank for competitive keywords and boosted their website traffic 
                            by 200% over six months. Some businesses find success by combining both strategies, 
                            like an e-commerce retailer that launched a targeted PPC campaign for seasonal 
                            sales alongside optimizing product pages for organic search. The hybrid approach 
                            resulted in a 30% higher return on investment compared to relying solely on PPC advertising."
                    />
                    <motion.div className="flex flex-col gap-4 items-start w-full"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{delay: 0.3, ease: "easeInOut"}}
                        viewport={{ once: true }}
                    >
                        <h3 className="space-grotesk-500 text-[clamp(20px,_2vw,_40px)]">
                            Key Takeaways for Your Marketing Strategy
                        </h3>
                        <div className="flex flex-col gap-4">
                            <EnumTextCard text="PPC is ideal for short-term goals, like promoting sales, events, or new products." />
                            <EnumTextCard text="Organic marketing is better for long-term growth, building trust, and creating 
                                    lasting customer relationships." />
                            <EnumTextCard text="A hybrid approach offers the best of both worlds, balancing quick results with 
                                    sustainable development." />
                        </div>
                    </motion.div>
                    <BlogBlock 
                        title="Choosing the Best Strategy for Your Business"
                        text="Ultimately, the choice between PPC and organic marketing depends on your specific needs. 
                            If you're working with a tight deadline or launching a new service, PPC can deliver immediate results. 
                            On the other hand, if you're focused on building a loyal audience and maintaining a steady 
                            flow of leads, organic marketing is your best bet."
                        subtext="By understanding the strengths and limitations of both strategies, you can create a marketing plan 
                            that aligns with your goals, budget, and target audience. Ready to take your next step? 
                            Start building a strategy that drives results today."
                    />
                </div>
            </div>
        </section>
    )
}