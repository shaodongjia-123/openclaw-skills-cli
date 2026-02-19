# 贡献指南

感谢你有兴趣为 OpenClaw Skills CLI 做出贡献！

## 如何贡献

### 报告Bug

在提交Bug之前，请先搜索现有issue。

提交Bug时请包含：
- 清晰的标题和描述
- 复现步骤
- 预期行为和实际行为
- 环境信息（Node.js版本、操作系统等）

### 提出新功能

建议新功能前，请先：
1. 搜索现有issue和discussions
2. 确认功能与项目目标一致
3. 提供详细的用例和实现思路

### 提交代码

#### 开发流程

1. Fork 本仓库
2. 创建新的分支：`git checkout -b feature/my-feature`
3. 提交更改：`git commit -m 'Add some feature'`
4. 推送到分支：`git push origin feature/my-feature`
5. 提交Pull Request

#### 代码规范

- 使用ESLint进行代码检查：`npm run lint`
- 添加适当的注释
- 更新相关文档
- 添加测试用例（如适用）

### 贡献技能

#### 创建新技能

1. 使用技能创建者工具：
   ```bash
   openclaw create my-skill --description="描述你的技能"
   ```

2. 实现技能逻辑：
   - 编辑 `prompt.js`
   - 添加执行规则到 `rules.md`
   - 提供使用示例

3. 提交PR：
   - 将技能放到 `skills/` 目录
   - 在PR中说明技能的用途和实现细节

#### 技能贡献清单

在提交技能之前，确保：
- [ ] 技能有清晰的文档（SKILL.md）
- [ ] 实现经过充分测试
- [ ] 包含至少一个使用示例
- [ ] 遵循现有的代码规范
- [ ] 文档使用项目语言（中文）

## 获取帮助

如果你在贡献过程中遇到问题：
- 查看 [GitHub Discussions](https://github.com/openclaw/skills-cli/discussions)
- 加入 [Discord社区](https://discord.gg/clawd)
- 提交issue询问

## 许可证

提交的贡献将采用与项目相同的MIT许可证。

---

再次感谢你的贡献！🙏
