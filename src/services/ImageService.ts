export const imageBuilder = (id: string, width = 500) => {
    return process.env.VUE_APP_COCKPIT_URL+"/assets/image/"+ id + (width ? ("?w=" + width) : '') + "&re=1";
}