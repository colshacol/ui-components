import { LocationDescriptor } from "./LocationDescriptor";
import { queryBuilder } from "./QueryBuilder";

/**
 * Render a location to a URL.
 *
 * @param absolute If true, attempts to make the URL absolute (only applies to
 * internal locations).
 */
export function url(location: LocationDescriptor, absolute = false): string {
  if (location.internal) {
    const { hash, path, query } = location;
    let url = path;
    if (query != null) {
      let builder = queryBuilder<typeof query>();
      for (const key of Object.keys(query)) {
        builder = builder.append(key, query[key]);
      }
      url += builder.toString();
    }
    if (hash != null) {
      url += `#${hash}`;
    }
    return absolute == true ? `${window.location.protocol}//${window.location.host}${url}` : url;
  } else {
    return location.url;
  }
}
