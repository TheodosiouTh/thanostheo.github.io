import { render } from 'ejs';
import React from 'react';

export default function () {
  return (
    <article>
      <h2>About Me</h2>
      <div>
        Main Text
      </div>
      <div>
        <div>
          <h3>Client Side</h3>
          <ul>
            <li>HTML/CSS</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
        </div>
        <div>
          <h3>Server Side</h3>
          <h4>Languages</h4>
          <ul>
            <li>Javascript</li>
            <li>Golang</li>
            <li>Ruby</li>
          </ul>
          <h4>Framewroks</h4>
          <ul>
            <li>NodeJS</li>
            <li>Express</li>
            <li>Fiber</li>
            <li>Rails</li>
          </ul>
          <h4>Database</h4>
          <ul>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ul>
          <h4>Other</h4>
          <ul>
            <li>Redis</li>
            <li>Docker</li>
            <li>Papertrail</li>
            <li>NewRelic</li>
          </ul>
        </div>
        <div>
          <h3>Tools</h3>
          <ul>
            <li>VS Code</li>
            <li>Robo3T</li>
            <li>PGAdming</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
