"use client";

import { useState, useEffect } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { motion } from "framer-motion";

export default function GithubHeatmap() {
  const [data, setData] = useState<{ date: string; count: number; level: number }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch("https://github-contributions-api.deno.dev/ankur-bag.json");
        const json = await response.json();
        
        // Flatten the 2D weeks array and map levels
        const flattened = json.contributions.flat().map((day: any) => ({
          date: day.date,
          count: day.contributionCount,
          level: day.contributionLevel === "NONE" ? 0 :
                 day.contributionLevel === "FIRST_QUARTILE" ? 1 :
                 day.contributionLevel === "SECOND_QUARTILE" ? 2 :
                 day.contributionLevel === "THIRD_QUARTILE" ? 3 : 4
        }));
        
        setData(flattened);
      } catch (error) {
        console.error("Failed to fetch GitHub contributions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  return (
    <section id="contributions" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-8xl font-normal  tracking-tighter text-black">
                Powered by <span className="font-accent italic text-accent lowercase tracking-normal text-5xl md:text-7xl">Coffee</span> & <span className="font-accent italic text-accent lowercase tracking-normal text-5xl md:text-7xl">Commits</span>
              </h2>
              <p className="text-gray-400 font-mono text-[10px] uppercase tracking-[0.4em] mt-6">A chronicle of persistence and problem solving.</p>
            </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "circOut" }}
          className="w-full flex flex-col items-center rounded-[3rem] p-6 md:p-10 overflow-hidden min-h-[300px] justify-center"
        >
          {loading ? (
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin" />
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">Fetching contribution data...</p>
            </div>
          ) : (
            <div className="w-full flex flex-col items-center">
              <div className="overflow-x-auto w-full flex justify-center no-scrollbar text-gray-500">
                <ActivityCalendar
                  data={data as any}
                  blockSize={18}
                  blockMargin={6}
                  fontSize={12}
                  colorScheme="light"
                  theme={{
                    light: [
                      "#f3f4f6",   // base
                      "#ffedd5",   // level 1
                      "#fb923c",   // level 2
                      "#f97316",   // level 3
                      "#ea580c"    // level 4 -> accent orange
                    ]
                  }}
                  labels={{
                    totalCount: "{{count}} contributions in the last year",
                  }}
                />
              </div>

              <div className="mt-12 flex items-center gap-8">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">Activity Level</span>
                 </div>
                 <div className="h-px w-12 bg-black/5" />
                 <p className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.3em]">GitHub Live Sync</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <style jsx>{`
        .font-accent {
          font-family: var(--font-accent);
          font-weight: 400;
        }
        :global(.react-activity-calendar text) {
          fill: #9ca3af !important; /* gray-400 */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
