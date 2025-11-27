window.addEventListener("DOMContentLoaded", () => {
    const tabbar = new TabBar("nav");
});

class TabBar {
    /** Tab bar element */
    el;

    /**
     * @param {string} el CSS selector for the tab bar
     */
    constructor(el) {
        this.el = document.querySelector(el);

        if (this.el) {
            this.el.setAttribute("data-pristine", "true");
            this.el.addEventListener("click", this.switchTab.bind(this));
        }
    }

    /**
     * Make the clicked tab active.
     * @param {Event} e Click event
     */
    switchTab(e) {
        // Allow animations, which were prevented on load
        if (this.el) {
            this.el.removeAttribute("data-pristine");
        }

        // Ensure the event target is a link
        const target = e.target.closest('a');

        if (target && target.tagName === 'A') {
            const href = target.getAttribute("href");

            if (href) {
                // Remove the state from the current page
                const currentPage = this.el?.querySelector(`[aria-current="page"]`);

                if (currentPage) {
                    currentPage.removeAttribute("aria-current");
                }

                // Apply the state to the new page
                target.setAttribute("aria-current", "page");
            }
        }
    }
}

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar