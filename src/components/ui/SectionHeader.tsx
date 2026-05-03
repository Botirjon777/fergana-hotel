export default function SectionHeader({
  label,
  titlePart1,
  titleEm,
  titlePart2,
}: {
  label: string;
  titlePart1: string;
  titleEm?: string;
  titlePart2?: string;
}) {
  return (
    <>
      <span className="font-jost text-[10px] tracking-[5px] uppercase text-gold block mb-4">{label}</span>
      <h2 className="font-cormorant text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-text-dark mb-6">
        {titlePart1} {titleEm && <em className="italic text-gold">{titleEm}</em>} {titlePart2 && <><br />{titlePart2}</>}
      </h2>
    </>
  );
}
