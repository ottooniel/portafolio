import { howIWork } from "@/content/site";

export default function HowIWork() {
  return (
    <div className="mt-14 lg:mt-24">
      <h3 className="font-mono text-[11px] font-medium tracking-[0.14em] text-text-muted uppercase">
        {howIWork.title}
      </h3>
      <ol className="mt-2 md:mt-8 border-b border-line md:grid md:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] md:gap-10 md:border-b-0">
        {howIWork.items.map((item, i) => (
          <li
            key={item.title}
            className="grid grid-cols-[22px_1fr] gap-x-3 border-t border-line py-5 md:block md:pt-6 md:pb-0"
          >
            <span aria-hidden="true" className="pt-[5px] font-mono md:pt-0 text-[11px] font-medium tracking-[0.12em] text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="md:mt-[14px]">
              <p className="font-display text-lg leading-snug font-semibold tracking-[-0.02em] text-text md:text-xl">
                {item.title}
              </p>
              <p className="mt-1.5 text-[15px] leading-[1.65] md:mt-2.5">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
