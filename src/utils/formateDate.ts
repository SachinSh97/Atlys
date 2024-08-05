/**
 * format give iso date string into x sec/min/hr format
 * @param dateString  iso date string
 * @returns date string
 */
export function formatDate(dateString: string): string {
	const date = new Date(dateString);
	const now = new Date();
	const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

	if (diffInSeconds < 60) {
		return `${diffInSeconds} secs ago`;
	}

	const diffInMinutes = Math.floor(diffInSeconds / 60);
	if (diffInMinutes < 60) {
		return `${diffInMinutes} mins ago`;
	}

	const diffInHours = Math.floor(diffInMinutes / 60);
	if (diffInHours < 24) {
		return `${diffInHours} hours ago`;
	}

	// For dates older than 24 hours, return date in "dd MMM" format
	const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' };
	return date.toLocaleDateString('en-GB', options);
}
