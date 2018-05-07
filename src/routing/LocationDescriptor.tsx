/**
 * Represents an internal URL (i.e. one within the Dovetail application).
 *
 * Internal URLs are navigated to using the browser's history API (push state).
 * This is done via react-router.
 */
export interface InternalLocationDescriptor {
  internal: true;
  /**
   * The path component of the URL, should start with a leading `/`.
   *
   * The path is stored separately from the other URL components to facilitate
   * usage with react-router's path mapping feature (it does not expect
   * querystring or hash fragments to be part of the pattern).
   */
  path: string;
  /**
   * An object of key-value parameters for the query string.
   *
   * By accepting an object, it avoids application code from being concerned
   * with the intricacies of URL encoding.
   */
  query?: { [name: string]: string } | null;
  /**
   * A hash fragment (excluding leading `#`).
   */
  hash?: string | null;
}

/**
 * Represents an external URL (i.e. one outside the Dovetail application).
 *
 * External URLs are treated differently from internal locations, as push-state
 * is not used.
 */
export interface ExternalLocationDescriptor {
  internal: false;
  /**
   * An absolute URL.
   */
  url: string;
  /**
   * If true, indicates that the URL should be opened in a new window.
   */
  openInNewTab?: boolean;
}

export type LocationDescriptor = InternalLocationDescriptor | ExternalLocationDescriptor;

export function isLocationDescriptor(x: object | undefined): x is LocationDescriptor {
  return (
    typeof x === "object" &&
    ((x as Partial<LocationDescriptor>).internal === true
      ? typeof (x as Partial<InternalLocationDescriptor>).path === "string"
      : typeof (x as Partial<ExternalLocationDescriptor>).url === "string")
  );
}

export const location = {
  internal(
    path: string,
    opts?: { query?: InternalLocationDescriptor["query"]; hash?: InternalLocationDescriptor["hash"] } | null
  ): InternalLocationDescriptor {
    return {
      path: path,
      query: opts != null ? opts.query : null,
      hash: opts != null ? opts.hash : null,
      internal: true
    };
  },
  external(url: string, options: { openInNewTab?: boolean } = {}): ExternalLocationDescriptor {
    const { openInNewTab = false } = options;
    return {
      url: url,
      internal: false,
      openInNewTab: openInNewTab
    };
  }
};
