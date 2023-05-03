export default function useScrollSpy(spyEls) {
  const load = async () => {
    if (typeof window !== undefined) {
      const ScrollMagic = (await import('scrollmagic')).default
      const controller = new ScrollMagic.Controller()
      new ScrollMagic.Scene({
        triggerElement: spyEls,
        triggerHook: 0.8,
        reverse: true,
      })
        .setClassToggle(spyEls, 'show')
        .addTo(controller)
    }
  }
  load()
}
