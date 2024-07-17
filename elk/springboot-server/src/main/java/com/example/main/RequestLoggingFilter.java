package com.example.main;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Component
public class RequestLoggingFilter implements Filter {
    Logger logger = LoggerFactory.getLogger(RequestLoggingFilter.class);

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // Initialization code, if needed
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        Map<String,String> infos = new HashMap<>();
        HttpServletRequest httpServletRequest = (HttpServletRequest) request;

        infos.put("method",httpServletRequest.getMethod());
        infos.put("url",httpServletRequest.getRequestURL().toString());
        infos.put("user-agent",httpServletRequest.getHeader("User-Agent"));
        infos.put("X-Forwarded-For",httpServletRequest.getHeader("X-Forwarded-For"));
        infos.put("X-Forwarded-Port",httpServletRequest.getHeader("X-Forwarded-Port"));
        infos.put("X-Real-IP",httpServletRequest.getHeader("X-Real-IP"));
        infos.put("Remote-Addr",httpServletRequest.getRemoteAddr());
        infos.put("Remote-Port", String.valueOf(httpServletRequest.getRemotePort()));

        ObjectMapper mapper = new ObjectMapper();
        String message = mapper.writeValueAsString(infos);

        logger.info(message);

        // Continue with the next filter in the chain or the target resource
        chain.doFilter(request, response);
    }

    @Override
    public void destroy() {
        // Cleanup code, if needed
    }
}
