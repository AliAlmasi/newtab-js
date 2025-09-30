/**
 * Options object used for newTab() function.
 *
 * These options define the new tab's anchor attributes.
 */
export type NewTabOptions = {
  /**
   * Specifies the relationship between the current document and the linked document
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel|MDN web docs}
   */
  rel?: string;
  /**
   * Causes the browser to treat the linked URL as a download.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#download|MDN web docs}
   */
  download?: { enable: boolean; filename?: string };
  /**
   * Define MIME type (e.g "application/pdf"). used for downloadable links.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#type|MDN web docs}
   */
  type?: string;
  /**
   * Hints at the human language of the linked URL. Mostly used for SEO.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#hreflang|MDN web docs}
   */
  hreflang?: string;
  /**
   * How much of the {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referer|referrer} to send when following the link.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#referrerpolicy|MDN web docs}
   */
  referrerpolicy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";
};
