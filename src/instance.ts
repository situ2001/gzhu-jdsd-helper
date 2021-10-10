import axios from "axios";
import axiosRetry from "axios-retry";

// Singleton axios
export const instance = axios.create({
  baseURL: "https://jdsd.gzhu.edu.cn/coctl_gzhu/index_wx.php",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat",
  },
});

axiosRetry(instance, {
  retries: 3,
  retryDelay: () => 1000,
});
