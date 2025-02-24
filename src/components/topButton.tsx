
const BackToTopButton = () => {
  // Scroll to top smoothly
  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button className="back-to-top" onClick={scrollToTop}>
      <i className="bi bi-arrow-up-short topButton"></i>
    </button>
  );
};

export default BackToTopButton;
