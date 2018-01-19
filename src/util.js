
export function getRedirectPath({type,avatar}){
	//return redirect address by user information
	//user.type /boss/genius
	//user.avatar /bossinfo /geniusinf
	let url = (type==='boss')?'/boss':'/genius'
	if(!avatar){
		url += 'info'
	}
	return url
}