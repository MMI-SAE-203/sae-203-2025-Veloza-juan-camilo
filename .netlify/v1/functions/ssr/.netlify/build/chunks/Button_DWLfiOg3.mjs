import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, f as renderSlot, a as renderTemplate } from './astro/server_C7KkCMV5.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { href, variant, classes } = Astro2.props;
  const variantClass = {
    beige: "bg-[var(--color-beige)] text-black hover:bg-[#e8d6b8] text-center",
    violet: "bg-[var(--color-violet-obscure)] text-[var(--color-beige)] hover:bg-[#201f38] text-center",
    outlinew: "border-2 border-white text-white hover:shadow-[inset_0_0_0_8px_rgba(255,255,255,0.2)] text-center",
    outlineb: "border-2 border-black text-black hover_shadow-[inset_0_0_0_8px_rgba(0,0,0,0.2)] text-center",
    default: "bg-[var(--color-beige)] text-black text-center"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([
    "rounded-4xl inline-flex items-center gap-4  px-6 py-2 text-xs font-bold uppercase tracking-wide transition duration-300 ease-in-out lg:px-15 lg:py-6 lg:text-sm text-center justify-center",
    variantClass[variant] || variantClass.default,
    classes
  ], "class:list")}${addAttribute(href, "href")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/macbookair/Desktop/Universite\u0301 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/components/Button.astro", void 0);

export { $$Button as $ };
